import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';

const useGetMessagesWithOne = (receiverId) => {
  const queryFn = async () => {
    const res = await axios({
      method: 'get',
      url: `/api/v1/messages/users/${receiverId}`,
    });

    return res.data.data;
  };

  const res = useQuery({
    queryFn,
    queryKey: ['messages', receiverId],
    enabled: receiverId && receiverId.length === 24,
  });

  return {
    data: res.data,
    isLoading: res.isLoading,
    isSuccess: res.isSuccess,
  };
};

export default useGetMessagesWithOne;
