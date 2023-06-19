import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios';
import useConfirmModal from '../../hooks/useConfirmModal';
import { logUserOut } from '../../store/authSlice';

const useSignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isConfirmed } = useConfirmModal();
  const mutationFn = async () => {
    await axios({
      method: 'delete',
      url: '/api/v1/auth/sign-out',
    });
  };

  const onSuccess = () => {
    dispatch(logUserOut());
  };
  const onError = async () => {
    await isConfirmed({
      cancelButtonText: 'Đóng',
      title: 'Lỗi',
      subTitle: 'Đã có lỗi xảy ra khi đăng xuất tài khoản. Hãy thử lại.',
      theme: 'error_modal',
    });
  };

  const mutation = useMutation({
    mutationFn,
    onSuccess,
    onError,
  });

  const signOut = async () => {
    const confirm = await isConfirmed({
      confirmButtonText: 'Đăng xuất',
      cancelButtonText: 'Thôi',
      title: 'Xác nhận',
      subTitle: 'Bạn có muốn đăng xuất tài khoản?',
    });
    if (confirm) {
      mutation.mutate();
    }
  };

  return {
    signOut,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
};

export default useSignOut;
