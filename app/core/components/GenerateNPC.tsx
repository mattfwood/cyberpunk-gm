import { Transition, Dialog } from '@headlessui/react';
import { Character, CharacterCard } from 'app/pages';
import React, { useState, Fragment } from 'react';
import { templates } from './npcTemplates';

// doesn't create a truly unique ID, but is close enough for our purposes
const generateUniqueEnoughId = () =>
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER - 1);

export function GenerateNPC({
  addCharacter,
}: {
  addCharacter: (character: Character) => void;
}) {
  const [open, setOpen] = useState(false);
  const [characters, setCharacters] = useState<Character[]>(
    Object.entries(templates).map(([name, template]) => ({
      id: generateUniqueEnoughId(),
      name,
      initiative: 0,
      turnComplete: false,
      ...template,
    }))
  );
  const [selectedTemplate, setSelectedTemplate] = useState(
    Object.keys(templates)[0]!
  );

  const currentCharacter = characters.find(
    (character) => character.name === selectedTemplate
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const characterTemplate = templates[selectedTemplate];

    if (characterTemplate && currentCharacter) {
      addCharacter({
        ...currentCharacter,
        id: Date.now(),
        turnComplete: false,
        initiative: 0,
      });
      setOpen(false);
    }
  }

  return (
    <>
      <button className="cyber-button" onClick={() => setOpen(true)}>
        Generate NPC
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-4 overflow-y-auto"
          open={open}
          onClose={setOpen}
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block bg-background text-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:w-full sm:p-6">
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="mb-3 text-lg leading-6 font-medium text-white"
                  >
                    Generate NPC
                  </Dialog.Title>
                  <select
                    required
                    name="template"
                    className="text-black capitalize mb-4"
                    onChange={(e) => setSelectedTemplate(e.target.value)}
                  >
                    {Object.entries(templates).map(([name, value]) => (
                      <option className="capitalize" key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <CharacterCard
                  // setCharacters={() => { }}
                  setCharacters={setCharacters}
                  characters={characters}
                  {...(currentCharacter ? currentCharacter : {})}
                  // {...templates[selectedTemplate]}
                />
                <div className="mt-5 sm:mt-6">
                  <button type="submit" className="cyber-button w-full">
                    Add NPC
                  </button>
                </div>
              </div>
            </Transition.Child>
          </form>
        </Dialog>
      </Transition.Root>
    </>
  );
}
