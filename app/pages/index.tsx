import React from 'react';
import Layout from 'app/core/layouts/Layout';
import type { BlitzPage } from 'blitz';

type CharacterCardProps = {
  name: string;
  currentHealth: number;
  maxHealth: number;
  initiative?: number;
};

const CharacterCard = ({
  name,
  currentHealth,
  maxHealth,
  initiative,
}: CharacterCardProps) => {
  return (
    <div className="border-2 border-primary divide-y divide-primary">
      <h3 className="text-xl font-bold  p-3">{name}</h3>
      <div className="flex divide-x divide-primary">
        <div className="p-3">
          {currentHealth} / {maxHealth} HP
        </div>
        <div className="p-3">Initiative: {initiative}</div>
      </div>
    </div>
  );
};

const character = {
  name: 'Johnny Hellmouth',
  currentHealth: 10,
  maxHealth: 20,
  initiative: 5,
};

const HomePage: BlitzPage = () => {
  return (
    <Layout>
      <CharacterCard {...character} />
    </Layout>
  );
};

export default HomePage;
