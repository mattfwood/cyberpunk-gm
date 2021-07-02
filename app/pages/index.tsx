import React, { useState } from 'react';
import produce from 'immer';
import Layout from 'app/core/layouts/Layout';
import type { BlitzPage } from 'blitz';
import { ChevronDownIcon, XIcon } from '@heroicons/react/outline';
import useLocalStorage from 'app/core/hooks/useLocalStorage';
import { Disclosure } from '@headlessui/react';
import { GenerateNPC } from 'app/core/components/GenerateNPC';

export type Stats = {
  int: number;
  ref: number;
  dex: number;
  tech: number;
  cool: number;
  will: number;
  luck: number;
  move: number;
  body: number;
  emp: number;
};

export type Weapon = {
  name: string;
  damage: string;
};

export type Armor = {
  head: number;
  body: number;
};

export type Character = {
  id: number;
  name: string;
  currentHealth: number;
  maxHealth: number;
  initiative: number;
  turnComplete: boolean;
  stats: Stats;
  weapons: Weapon[] | null;
  armor: Armor;
};

type CharacterCardProps = Character & {
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  characters: Character[];
};

const Label = ({ children }) => (
  <div className="text-[#c7c7c7] text-sm uppercase">{children}</div>
);

const CharacterCard = ({
  id,
  name,
  currentHealth,
  maxHealth,
  initiative,
  setCharacters,
  characters,
  armor,
}: // index,
// turnComplete,
CharacterCardProps) => {
  const [turnComplete, setTurnComplete] = useState(false);
  const [damageValue, setDamageValue] = useState(0);

  function handleChange(e) {
    setCharacters((prev) => {
      const result = produce(prev, (draft) => {
        const index = draft.findIndex((character) => character.id === id);
        const currentCharacter = draft[index]!;
        let value: string | number | boolean = e.target.value;

        const fieldName = e.target.name;

        if (e.target.type === 'number') {
          value = parseInt(e.target.value);
        } else if (e.target.type === 'checkbox') {
          value = e.target.checked;
        }

        if (fieldName.includes('armor')) {
          const armorType = fieldName.split('.')[1];
          currentCharacter.armor[armorType] = value;
        } else {
          currentCharacter[e.target.name] = value;
        }
      });

      return result;
    });
  }

  function handleDamage(type: 'head' | 'body', distance: 'ranged' | 'melee') {
    setCharacters((prev) => {
      const result = produce<Character[]>(prev, (draft) => {
        const index = draft.findIndex((character) => character.id === id);
        const currentCharacter = draft[index]!;

        if (index !== -1) {
          let armorValue = currentCharacter.armor[type];

          // melee ignores half of armor, rounded up
          if (distance === 'melee') {
            armorValue = Math.round(armorValue / 2);
          }

          // deal damage equal to damageValue - armor
          const hpLoss = Math.max(damageValue - armorValue, 0);
          currentCharacter.currentHealth = Math.max(
            currentCharacter.currentHealth - hpLoss,
            0
          );

          // reduce armor SP by 1
          currentCharacter.armor[type] = Math.max(
            currentCharacter.armor[type] - 1,
            0
          );
        }
      });

      return result;
    });
  }

  function handleDelete() {
    const confirm = window.confirm(
      'Are you sure you want to delete this character?'
    );

    if (confirm) {
      setCharacters((prev) => {
        const result = produce(prev, (draft) => {
          const index = draft.findIndex((character) => character.id === id);
          draft.splice(index, 1);
        });

        return result;
      });
    }
  }

  return (
    <>
      <div
        className={`border-2 border-primary divide-y divide-primary relative ${
          turnComplete ? 'opacity-50' : 'opacity-100'
        }`}
      >
        <button
          tabIndex={-1}
          onClick={handleDelete}
          className="bg-primary hover:bg-primary-focus text-black hover:text-white w-5 h-5 absolute right-0 top-0"
        >
          <XIcon />
        </button>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mx-2 bg-primary focus:ring-0 text-primary border-none outline-none focus:outline-none focus:bg-primary-focus checked:bg-primary-focus hover:bg-primary-focus active:bg-primary-focus"
            name="turnComplete"
            onChange={(e) => setTurnComplete(e.target.checked)}
            checked={turnComplete}
          />
          <input
            value={name}
            type="text"
            name="name"
            className="clear-input text-white text-xl font-bold"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap divide-x divide-primary">
          <div className="p-3">
            <Label>Initiative</Label>
            <input
              onChange={handleChange}
              type="number"
              name="initiative"
              className="w-14"
              value={initiative}
            />
          </div>
          <div className="p-3">
            <Label>HP</Label>
            <input
              type="number"
              name="currentHealth"
              className="w-14"
              value={currentHealth}
              onChange={handleChange}
            />
            <span> / </span>
            <input
              type="number"
              name="maxHealth"
              className="w-14"
              value={maxHealth}
              onChange={handleChange}
            />
          </div>
          <div className="p-3">
            <Label>Head Armor</Label>
            <input
              type="number"
              name="armor.head"
              className="w-14"
              value={armor?.head}
              onChange={handleChange}
            />
          </div>
          <div className="p-3">
            <Label>Body Armor</Label>
            <input
              type="number"
              name="armor.body"
              className="w-14"
              value={armor?.body}
              onChange={handleChange}
            />
          </div>
          <div className="p-3">
            <Label>Deal Ranged Damage</Label>
            <div className="flex space-x-2 flex-wrap">
              <input
                type="number"
                // name="armor.body"
                placeholder="amount"
                className="w-14"
                value={damageValue}
                onChange={(e) => setDamageValue(parseInt(e.target.value))}
              />
              <button
                className="cyber-button py-0"
                onClick={() => handleDamage('head', 'ranged')}
              >
                Head
              </button>
              <button
                className="cyber-button py-0"
                onClick={() => handleDamage('body', 'ranged')}
              >
                Body
              </button>
            </div>
          </div>
          <div className="p-3">
            <Label>Deal Melee Damage</Label>
            <div className="flex space-x-2 flex-wrap">
              <input
                type="number"
                // name="armor.body"
                placeholder="amount"
                className="w-14"
                value={damageValue}
                onChange={(e) => setDamageValue(parseInt(e.target.value))}
              />
              <button
                className="cyber-button py-0"
                onClick={() => handleDamage('head', 'melee')}
              >
                Head
              </button>
              <button
                className="cyber-button py-0"
                onClick={() => handleDamage('body', 'melee')}
              >
                Body
              </button>
            </div>
          </div>
        </div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-center bg-primary w-full">
                <ChevronDownIcon
                  className={`text-xs w-5 text-black transform ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="p-4">Content</div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

// const samplePlayer = {
//   name: 'Johnny Hellmouth',
//   currentHealth: 10,
//   maxHealth: 20,
//   initiative: 5,
//   turnComplete: false,
// };

// const initialCharacters = [
//   { ...samplePlayer, name: 'Guy 1', initiative: 10 },
//   { ...samplePlayer, name: 'guy 2', initiative: 10 },
//   { ...samplePlayer, name: 'guy 3', initiative: 15 },
// ];

const HomePage: BlitzPage = () => {
  const [characters, setCharacters] = useLocalStorage<Character[]>(
    'combatTracking',
    []
  );

  console.log(characters);
  const [roundTimestamp, setRoundTimestamp] = useState(Date.now());

  function addCharacter(
    newCharacter: Character = {
      id: Date.now(),
      name: '',
      currentHealth: 0,
      maxHealth: 0,
      initiative: 0,
      turnComplete: false,
      armor: {
        head: 0,
        body: 0,
      },
      stats: {
        int: 0,
        ref: 0,
        dex: 0,
        tech: 0,
        cool: 0,
        will: 0,
        luck: 0,
        move: 0,
        body: 0,
        emp: 0,
      },
      weapons: [],
    }
  ) {
    setCharacters((prev) => [...prev, newCharacter]);
  }

  const sortedCharacters = [...characters].sort(
    (a, b) => b.initiative - a.initiative
  );

  const startNewRound = () => {
    setRoundTimestamp(Date.now());
  };

  return (
    <Layout>
      <div className="mb-4">
        <button className="cyber-button" onClick={startNewRound}>
          New Round
        </button>
      </div>
      <div className="space-y-4" key={roundTimestamp}>
        {sortedCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            {...character}
            name={`${character.name}`}
            setCharacters={setCharacters}
            characters={sortedCharacters}
          />
        ))}
      </div>
      <div className="mt-4 space-x-2 flex">
        <button className="cyber-button" onClick={() => addCharacter()}>
          Add Character
        </button>
        <GenerateNPC />
      </div>
    </Layout>
  );
};

export default HomePage;
