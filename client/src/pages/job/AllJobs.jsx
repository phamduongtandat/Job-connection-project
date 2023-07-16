import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useGetJobs from '../../react-query/jobs/useGetJobs';
import JobItem from '../../components/job/JobItem';
import Pagination from '../../components/table/Pagination';

function AllJobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageSize = searchParams.get('pageSize');
  const page = searchParams.getAll('page');
  const keyword = searchParams.get('keyword');
  const query = {
    page,
    pageSize: pageSize || 7,
    keyword,
    searchBy: ['title', 'position'],
  };

  const { jobs, pagination } = useGetJobs({ query });
  return (
    <div className="p-10">
      {jobs?.map((item) => (
        <JobItem key={item._id} item={item} />
      ))}
      <Pagination pagination={pagination} />
    </div>
  );
}

export default AllJobs;
