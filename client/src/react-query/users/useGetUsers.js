import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import axios from '../../config/axios';

const useGetUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageSize = searchParams.get('pageSize');
  const page = searchParams.getAll('page');
  const keyword = searchParams.get('keyword');
  const account_type = searchParams.get('account_type');

  const query = {
    page,
    pageSize,
    keyword,
    account_type,
    searchBy: ['name', 'email'],
    pageSize: 5,
  };

  const queryFn = async () => {
    const res = await axios({
      method: 'get',
      url: '/api/v1/users',
      params: query,
    });

    return res.data;
  };

  const res = useQuery({
    queryFn,
    queryKey: ['users', query],
    keepPreviousData: true,
  });

  return {
    users: res.data?.data,
    pagination: res.data?.pagination,
    isLoading: res.isLoading,
    isSuccess: res.isSuccess,
    isError: res.isError,
  };
};

export default useGetUsers;
