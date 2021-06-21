import React, { useState } from 'react';
import { DiceRoll } from 'rpg-dice-roller';
import { RadioGroup } from '@headlessui/react';
import { roles } from './roles';
import { useCharacterState } from '../atoms/roleAtom';
import { StatGenerator } from './StatGenerator';
import { SkillBuilder } from './SkillBuilder';

function LifepathSection() {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  return (
    <div>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label>Personality</RadioGroup.Label>
        <div className="space-y-2">
          {personalities.map((personality) => (
            <RadioGroup.Option
              key={personality.roll}
              value={personality.roll}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-2 ring-offset-2 ring-offset-light-blue-300 ring-white ring-opacity-60 dark-red text-white'
                    : 'bg-white'
                }
                  ${
                    checked
                      ? 'dark-red bg-light-blue-900 bg-opacity-75 text-white'
                      : ''
                  }
                    relative cut-edges shadow-md px-5 py-4 cursor-pointer flex focus:outline-none active:text-white`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked || active ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {personality.type}
                        </RadioGroup.Label>
                        {/* <RadioGroup.Description
                        as="span"
                        className={`inline ${
                          checked ? 'text-light-blue-100' : 'text-gray-500'
                        }`}
                      >
                        <span>{personality.type}</span>{' '}
                        <span aria-hidden="true">&middot;</span>{' '}
                        <span>{personality.disk}</span>
                      </RadioGroup.Description> */}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <button
        type="button"
        className="cut-edges py-2 px-4 bg-white text-gray-800 mt-4"
        onClick={() => {
          const result = new DiceRoll('d10');
          setSelected(result.total as number);
        }}
      >
        Roll Random Lifepath (d10)
      </button>
    </div>
  );
}

const RoleSelector = () => {
  const [character, setCharacter] = useCharacterState();

  return (
    <div>
      <select
        className="select-input px-4 py-2 cut-edges text-black"
        value={character.role}
        onChange={(e) =>
          setCharacter((prev) => ({
            ...prev,
            role: e.target.value as keyof typeof roles,
            skills: roles[e.target.value].skills,
          }))
        }
      >
        {Object.keys(roles).map((role) => (
          <option key={role} value={role} className="capitalize">
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

/**
 * 1. Pick a role
 *   a. Set role ability to 4
 * 2. Run lifepath (general + role lifepath), cultural origin language
 * 3. Roll your statistics
 * 4. Calculate derived statistics
 * 5. Set your skills
 * 6. Record weapons, armor
 * 7. Record armor
 * 8. Record cyberware
 */
const steps = [
  {
    title: 'Pick Role',
    component: <RoleSelector />,
  },
  {
    title: 'Skills',
    component: (
      <section>
        <SkillBuilder />
      </section>
    ),
  },
  {
    title: 'Run Lifepath',
    component: (
      <div>
        <LifepathSection />
      </div>
    ),
  },
  {
    title: 'Roll STATs',
    component: (
      <section>
        <StatGenerator />
      </section>
    ),
  },
  // {
  //   title: 'Skills',
  //   component: (
  //     <section>
  //       <SkillBuilder />
  //     </section>
  //   ),
  // },
];

const personalities = [
  { roll: 1, type: 'Shy and secretive' },
  { roll: 2, type: 'Rebellious, antisocial, and violent' },
  { roll: 3, type: 'Arrogant, proud, and aloof' },
  { roll: 4, type: 'Moody, rash, and headstrong' },
  { roll: 5, type: 'Picky, fussy, and nervous' },
  { roll: 6, type: 'Stable and serious' },
  { roll: 7, type: 'Silly and fluff-headed' },
  { roll: 8, type: 'Sneaky and deceptive' },
  { roll: 9, type: 'Intellectual and detached' },
  { roll: 10, type: 'Friendly and outgoing' },
];

export function CharacterForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  return (
    <form className="space-y-4">
      {steps.map((step, index) => {
        const inactiveStep = currentStep < index;
        return (
          <div className={`sheet-box ${inactiveStep ? 'opacity-40' : ''}`}>
            <h2>{step.title}</h2>
            <fieldset disabled={inactiveStep} className="py-2">
              {step.component}
            </fieldset>
            <button
              onClick={nextStep}
              className="bg-white text-gray-800 px-4 py-2 cut-edges"
              type="button"
            >
              Next Step
            </button>
          </div>
        );
      })}
    </form>
  );
}
