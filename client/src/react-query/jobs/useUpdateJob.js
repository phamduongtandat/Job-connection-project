import { useMutation } from '@tanstack/react-query';
import axios from '../../config/axios';

const useUpdateJob = ({ id }) => {
  const mutationFn = async (data) => {
    await axios({
      method: 'put',
      url: `/api/v1/jobs/${id}`,
      data,
    });
  };

  const mutation = useMutation({
    mutationFn,
  });

  return {
    isLoading: mutation.isLoading,
    updateJob: mutation.mutate,
  };
};

export default useUpdateJob;
