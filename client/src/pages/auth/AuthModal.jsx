import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function AuthModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [currentForm, setCurrentForm] = useState('sign_in');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function toggleAuthForm() {
    if (currentForm === 'sign_in') setCurrentForm('sign_up');
    if (currentForm === 'sign_up') setCurrentForm('sign_in');
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-primary px-6 py-1 text-white"
      >
        Sign In
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="p-8">
                    <h3 className="text-xl font-medium leading-6 text-gray-900 text-center mb-8">
                      {currentForm === 'sign_in' ? 'Đăng nhập' : 'Đăng ký'}
                    </h3>
                    {currentForm === 'sign_in' ? (
                      <SignInForm />
                    ) : (
                      <SignUpForm />
                    )}
                  </div>
                  <div className="border-t py-4 flex justify-center gap-x-3">
                    <span className="text-sm text-text-light">
                      {currentForm === 'sign_in'
                        ? 'Chưa có tài khoản?'
                        : 'Đã có tài khoản?'}
                    </span>
                    <span
                      className="text-primary cursor-pointer hover:underline text-sm"
                      onClick={toggleAuthForm}
                    >
                      {currentForm === 'sign_in' ? 'Đăng ký' : 'Đăng nhập'}
                    </span>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
