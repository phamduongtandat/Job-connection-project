import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useAuthModal from '../../hooks/useAuthModal';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default function AuthModal() {
  const {
    isOpen,
    currentForm,
    handleCloseAuthModal,
    handleToggleAuthForm,
    handleOpenForgotPasswordModal,
  } = useAuthModal();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCloseAuthModal}>
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
                    {currentForm === 'sign_in' && 'Đăng nhập'}
                    {currentForm === 'sign_up' && 'Đăng ký'}
                    {currentForm === 'forgot_password' && 'Quên mật khẩu'}
                    {currentForm === 'reset_password' && 'Đổi mật khẩu'}
                  </h3>
                  {currentForm === 'sign_in' && <SignInForm />}
                  {currentForm === 'sign_up' && <SignUpForm />}
                  {currentForm === 'forgot_password' && <ForgotPasswordForm />}
                  {currentForm === 'reset_password' && <ResetPasswordForm />}

                  {currentForm === 'sign_in' && (
                    <button
                      type="button"
                      className="text-primary mt-1 text-end w-full hover:underline"
                      onClick={handleOpenForgotPasswordModal}
                    >
                      Quên mật khẩu?
                    </button>
                  )}
                </div>
                {currentForm !== 'reset_password' && (
                  <div className="border-t py-4 flex justify-center gap-x-3">
                    <span className="text-sm text-text-light">
                      {currentForm === 'sign_in'
                        ? 'Chưa có tài khoản?'
                        : 'Đã có tài khoản?'}
                    </span>
                    <span
                      className="text-primary cursor-pointer hover:underline text-sm"
                      onClick={handleToggleAuthForm}
                    >
                      {currentForm === 'sign_in' ? 'Đăng ký' : 'Đăng nhập'}
                    </span>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
