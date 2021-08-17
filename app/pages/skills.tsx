import { categories, skillList } from 'app/core/components/skillList';
import Layout from 'app/core/layouts/Layout';
import React from 'react';
import { toSentenceCase } from '.';

export default function SkillsPage() {
  return (
    <Layout title="Skill List">
      {categories.map((category) => (
        <div className="capitalize mb-4">
          <h4 className="uppercase text-lg">{category}</h4>
          {Object.entries(skillList).map(([key, value]) => {
            if (value.category !== category) {
              return null;
            }

            return (
              <div className="capitalize">
                {toSentenceCase(key)} ({value.linkedStat.toUpperCase()})
                <div>{value.description}</div>
              </div>
            );
          })}
        </div>
      ))}
    </Layout>
  );
}
