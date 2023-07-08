import { useQuery } from '@tanstack/react-query';
import axios from '../../config/axios';

const useGetJobs = () => {
    const queryFn = async () => {
        const res = await axios({
            method: 'get',
            url: "/api/v1/jobs",
            //params: query,
        });

        return res.data;
    };

    const res = useQuery({
        queryFn,
        //enabled: !!id,
        queryKey: ['jobs'],
    });

    return {
        jobs: res.data?.data,
        isLoading: res.isLoading,
        isError: res.isError,
        isSuccess: res.isSuccess,
    };
};

export default useGetJobs;