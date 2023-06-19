import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import useAuthModal from '../../hooks/useAuthModal';
import { logUserIn } from '../../store/authSlice';

const useSignIn = () => {
  const { handleCloseAuthModal } = useAuthModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mutationFn = async (data) => {
    const res = await axios({
      method: 'post',
      url: '/api/v1/auth/sign-in',
      data,
    });

    return res.data;
  };

  const onSuccess = (data) => {
    const user = data.data;
    handleCloseAuthModal();
    dispatch(logUserIn(user));

    if (user?.role === 'admin') {
      navigate('/admin/users');
    } else {
      navigate('/profile/user-info');
    }
  };

  const onError = (error) => {
    console.log(error?.response?.data?.message);
  };

  const mutation = useMutation({ mutationFn, onError, onSuccess });

  return {
    signIn: mutation.mutate,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error?.response?.data?.message,
  };
};

export default useSignIn;
