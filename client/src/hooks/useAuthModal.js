import { useDispatch, useSelector } from 'react-redux';
import {
  closeAuthModal,
  openSignInModal,
  openSignUpModal,
  toggleAuthForm,
} from '../store/authSlice';

const useAuthModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isOpen);
  const currentForm = useSelector((state) => state.auth.currentForm);

  const handleCloseAuthModal = () => {
    dispatch(closeAuthModal());
  };

  const handleOpenSignInModal = () => {
    dispatch(openSignInModal());
  };

  const handleOpenSignUpModal = () => {
    dispatch(openSignUpModal());
  };

  const handleToggleAuthForm = () => {
    dispatch(toggleAuthForm());
  };

  return {
    isOpen,
    currentForm,
    handleCloseAuthModal,
    handleOpenSignInModal,
    handleOpenSignUpModal,
    handleToggleAuthForm,
  };
};

export default useAuthModal;
