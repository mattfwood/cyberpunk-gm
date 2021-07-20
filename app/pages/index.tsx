import React, { useState } from 'react';
import produce from 'immer';
import Layout from 'app/core/layouts/Layout';
import type { BlitzPage } from 'blitz';
import { ChevronDownIcon, XIcon } from '@heroicons/react/outline';
import useLocalStorage from 'app/core/hooks/useLocalStorage';
import { Disclosure } from '@headlessui/react';
import { GenerateNPC } from 'app/core/components/GenerateNPC';
import {
  categories,
  characterSkills,
  Skill,
  skillList,
} from 'app/core/components/skillList';

// convert camelcase string to use spaces
function toSentenceCase(text: string) {
  const result = text.replace(/([A-Z])/g, ' $1');
  // var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}

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

// export type Skill = { [key: typeof SKILL_LIST[number]]: number };

export type Character = {
  id: number;
  name: string;
  currentHealth: number;
  maxHealth: number;
  initiative: number;
  turnComplete: boolean;
  stats: Stats;
  weapons: { [key: string]: string };
  armor: Armor;
  skills: { [key in Skill]: number };
  notes: string;
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
  stats,
  weapons,
  skills,
  notes,
}: CharacterCardProps) => {
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

        if (fieldName.includes('.')) {
          const [fieldKey, subKey] = fieldName.split('.');
          currentCharacter[fieldKey][subKey] = value;
        } else if (fieldName.includes('stats')) {
          const stat = fieldName.split('.')[1];
          currentCharacter.stats[stat] = value;
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
        <div className="grid grid-flow-row grid-cols-fit-150 gap-px divide-primary grid-container">
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
          <div className="p-3 border-b border-primary">
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
            <div className="flex flex-col flex-wrap space-y-1 md:space-y-0 items-start  md:flex-row md:flex-nowrap md:items-center">
              <input
                type="number"
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
            <div className="flex flex-col flex-wrap space-y-1 md:space-y-0 items-start  md:flex-row md:flex-nowrap md:items-center">
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
                <div className="p-4 border-primary border-b">
                  <Label>Notes</Label>
                  <textarea
                    className="text-black w-full"
                    value={notes}
                    name="notes"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2 divide-primary divide-y">
                  <div className="p-4 flex flex-wrap space-x-2">
                    {Boolean(stats) &&
                      Object.entries(stats).map(([key, value]) => (
                        <label>
                          <div>{key.toUpperCase()}</div>
                          <input
                            name={`stats.${key}`}
                            onChange={handleChange}
                            className="w-14 mt-1"
                            type="number"
                            min={0}
                            value={value}
                          />
                        </label>
                      ))}
                  </div>
                  <div className="flex space-x-2 divide-primary divide-x">
                    <div className="p-4 capitalize space-y-2">
                      <h4 className="font-bold uppercase">Weapons</h4>
                      {Object.entries(weapons)?.map(([name, damage]) => (
                        <label className="flex justify-between space-x-2">
                          <div>{name}</div>
                          <input
                            type="text"
                            className="w-16"
                            name={`weapons.${name}`}
                            value={damage}
                            onChange={handleChange}
                          />
                        </label>
                      ))}
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold uppercase">Ranged Hit Values</h4>
                      <div>DV for weapon type + range</div>
                      {stats?.ref >= 8 ? (
                        <>
                          <small className="block">OR</small>
                          <div>{stats.dex + (skills?.evasion || 0)} + 1d10</div>
                          <small>(DEX + Evasion Skill + 1d10)</small>
                        </>
                      ) : (
                        <div className="text-gray-400">
                          Can't dodge, REF lower than 8
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold uppercase">Melee Hit Values</h4>
                      <div>{stats.dex + (skills?.evasion || 0)} + 1d10</div>
                      <small className="text-xs">
                        (DEX + Evasion Skill + 1d10)
                      </small>
                    </div>
                  </div>
                  <div className="p-4 pb-2">
                    <h4 className="font-bold uppercase">Skills</h4>
                  </div>
                  <div className="grid grid-flow-row grid-cols-fit-50 gap-px divide-primary grid-container">
                    {categories.map((categoryName) => (
                      <div className="p-4">
                        <h5 className="uppercase">
                          {toSentenceCase(categoryName)}
                        </h5>
                        {Boolean(skills) &&
                          Object.entries(skills).map(
                            ([name, value]: [Skill, number]) => {
                              const skillCategory = skillList[name].category;
                              // group skills by category, only show one category at a time
                              // @TODO: change this to be .reduce for efficiency
                              if (skillCategory !== categoryName) return null;

                              return (
                                <label>
                                  <div className="capitalize leading-none">
                                    {toSentenceCase(name)}
                                  </div>
                                  <input
                                    className="w-12"
                                    type="number"
                                    defaultValue={value}
                                  />
                                </label>
                              );
                            }
                          )}
                      </div>
                    ))}
                  </div>
                </div>
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

const defaultCharacter: Character = {
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
  weapons: { 'poor quality shotgun': '5d6', 'very heavy pistol': '4d6' },
  skills: characterSkills!,
  notes: '',
};

const HomePage: BlitzPage = () => {
  const [characters, setCharacters] = useLocalStorage<Character[]>(
    'combatTracking',
    []
  );

  const [roundTimestamp, setRoundTimestamp] = useState(Date.now());

  function addCharacter(newCharacter: Character = defaultCharacter) {
    setCharacters((prev) => [...prev, { ...newCharacter, id: Date.now() }]);
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
        <GenerateNPC addCharacter={addCharacter} />
      </div>
    </Layout>
  );
};

export default HomePage;
