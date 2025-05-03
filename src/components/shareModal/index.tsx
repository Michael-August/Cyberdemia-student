'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaCopy, FaLinkedin, FaReddit, FaXTwitter } from 'react-icons/fa6';
import { toast } from 'react-toastify';

export default function ShareModal({
  isOpen,
  setIsOpen,
  url,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  url: string;
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success('Link copied!');
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-lg font-semibold mb-2">
                  Certificate Link
                </Dialog.Title>
                <p className="text-sm text-gray-500 mb-3">
                  Public certificate link that can be shared with others.
                </p>

                <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2 mb-4">
                  <span className="truncate text-sm text-gray-700">{url}</span>
                  <button
                    onClick={handleCopy}
                    className="ml-2 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-sm rounded-md flex items-center gap-1"
                  >
                    <FaCopy className="text-gray-600" />
                    Copy link
                  </button>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-[#0e76a8] text-2xl" />
                  </a>
                  <a
                    href={`https://www.reddit.com/submit?url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaReddit className="text-orange-500 text-2xl" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="text-black text-2xl" />
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
