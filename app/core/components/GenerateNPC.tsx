import { Transition, Dialog } from '@headlessui/react';
import React, { useState, Fragment } from 'react';
import { templates } from './npcTemplates';

export function GenerateNPC() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="cyber-button" onClick={() => setOpen(true)}>
        Generate NPC
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={open}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
              <div className="inline-block align-bottom bg-background text-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="mb-3 text-lg leading-6 font-medium text-white"
                  >
                    Generate NPC
                  </Dialog.Title>
                  <select name="template" className="text-black capitalize">
                    {Object.entries(templates).map(([name, value]) => (
                      <option className="capitalize" key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button type="button" className="cyber-button w-full">
                    Add NPC
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
