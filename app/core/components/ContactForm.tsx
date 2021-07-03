import { useMutation } from 'blitz';
import { useState } from 'react';
import createFeedback from 'app/feedbacks/mutations/createFeedback';

export default function ContactForm() {
  const [createFeedbackMutation, { isSuccess }] = useMutation(createFeedback);
  async function handleSubmit(e) {
    e.preventDefault();

    const { username, message } = e.target.elements;
    // console.log(JSON.stringify({ username: username.value, message: message.value }));
    const res = await createFeedbackMutation({
      username: username.value,
      message: message.value,
    });
    console.log(res);
  }

  return (
    <div className="text-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Send Feedback
          </h2>
          {/* <p className="mt-4 text-lg leading-6 text-gray-300">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p> */}
        </div>
        <div className="mt-12">
          {isSuccess ? (
            <div>Thanks for your feedback!</div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300"
                >
                  Reddit Username (optional, if we have any follow-up questions)
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    autoComplete="username"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md text-black"
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full cyber-button inline-flex items-center justify-center px-6 py-3"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
