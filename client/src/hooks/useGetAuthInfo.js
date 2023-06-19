import { useSelector } from 'react-redux';

const useGetAuthInfo = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const isAdminAccount = user?.role === 'admin';
  const isPersonalAccount =
    user?.role !== 'admin' && user?.account_type === 'personal';
  const isBusinessAccount =
    (user?.role !== 'admin') & (user?.account_type === 'business');

  return {
    isLoggedIn,
    isPersonalAccount,
    isBusinessAccount,
    isAdminAccount,
  };
};

export default useGetAuthInfo;
