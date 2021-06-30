import React, { InputHTMLAttributes, useState } from 'react';
import Layout from 'app/core/layouts/Layout';
import type { BlitzPage } from 'blitz';

type Character = {
  name: string;
  currentHealth: number;
  maxHealth: number;
  initiative: number;
};

type CharacterCardProps = Character & {
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  index: number;
};

const Label = ({ children }) => (
  <div className="text-[#c7c7c7] text-sm uppercase">{children}</div>
);

const CharacterCard = ({
  name,
  currentHealth,
  maxHealth,
  initiative,
  setCharacters,
  index,
}: CharacterCardProps) => {
  function handleChange(e) {
    setCharacters((prev) => {
      const updatedCharacters = [...prev];
      const currentCharacter = updatedCharacters[index];
      updatedCharacters[index] = {
        ...currentCharacter,
        [e.target.name]: e.target.value,
      };
      return updatedCharacters;
    });
  }
  return (
    <div className="border-2 border-primary divide-y divide-primary">
      <h3 className="text-xl font-bold  p-3">{name}</h3>
      <div className="flex divide-x divide-primary">
        <div className="p-3">
          <Label>Initiative</Label>
          <input
            onChange={handleChange}
            type="number"
            name="initiative"
            className="w-12"
            value={initiative}
          />
        </div>
        <div className="p-3">
          <Label>HP</Label>
          <input
            type="number"
            name="currentHealth"
            className="w-12"
            value={currentHealth}
          />{' '}
          /{' '}
          <input
            type="number"
            name="maxHealth"
            className="w-12"
            value={maxHealth}
          />
        </div>
      </div>
    </div>
  );
};

const samplePlayer = {
  name: 'Johnny Hellmouth',
  currentHealth: 10,
  maxHealth: 20,
  initiative: 5,
};

const initialCharacters = [
  samplePlayer,
  { ...samplePlayer, initiative: 10 },
  { ...samplePlayer, initiative: 15 },
];

const HomePage: BlitzPage = () => {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);

  function addCharacter() {
    const newCharacter = {
      name: '',
      currentHealth: 0,
      maxHealth: 0,
      initiative: 0,
    };
    setCharacters((prev) => [...prev, newCharacter]);
  }

  const sortedCharacters = characters.sort(
    (a, b) => b.initiative - a.initiative
  );

  return (
    <Layout>
      <div className="space-y-4">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            {...character}
            name={`${character.name} ${index}`}
            index={index}
            setCharacters={setCharacters}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
