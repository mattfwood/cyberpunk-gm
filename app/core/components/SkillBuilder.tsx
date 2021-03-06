import React from 'react';
import { useCharacterState } from '../atoms/roleAtom';

export function SkillBuilder() {
  const [character, setCharacter] = useCharacterState();

  const roleSkills = character?.skills;

  if (!character?.role || !roleSkills) {
    return <div>Pick role first</div>;
  }

  function calculateSkillpoints() {
    const TOTAL_POINTS = 86;
    const allocatedSkillpoints = Object.entries(character.skills!).reduce(
      (total, [name, value]) => {
        // complex skills with x2 in name cost twice as much
        const cost = name.includes('x2') ? value * 2 : value;
        return total + cost;
      },
      0
    );

    return TOTAL_POINTS - allocatedSkillpoints;
  }

  const remainingSkillpoints = calculateSkillpoints();

  return (
    <div className="space-y-2">
      <div className="my-2 text-lg">
        Remaining Skill Points: {remainingSkillpoints}
      </div>
      <div className="text-xs">(Skills cannot be below 2 or above 6)</div>
      {Object.entries(roleSkills).map(([skill, value]) => {
        return (
          <div className="flex">
            <div className="bg-white text-black px-3 py-2 mr-2 capitalize">
              {skill}
            </div>
            <input
              type="number"
              className="text-black px-4 w-20"
              value={value}
              min={2}
              max={6}
              onChange={(e) => {
                const newValue = parseInt(e.target.value);

                if (newValue >= 2 && newValue <= 6) {
                  setCharacter((prev) => ({
                    ...prev,
                    skills: {
                      ...character.skills,
                      [skill]: newValue,
                    },
                  }));
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
