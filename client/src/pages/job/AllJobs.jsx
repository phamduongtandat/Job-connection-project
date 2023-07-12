import React from "react";
import useGetJobs from "../../react-query/jobs/useGetJobs";
import JobItem from "../../components/job/JobItem";

function AllJobs() {
  const { jobs } = useGetJobs();
  return (
    <div className="p-10">
      {jobs?.map((item) => (
        <JobItem key={item._id} item={item} />
      ))}
    </div>
  );
}

export default AllJobs;
