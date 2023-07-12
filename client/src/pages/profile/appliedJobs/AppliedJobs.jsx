import { Link, useParams } from "react-router-dom";

import useGetAppliedJobs from "./../../../react-query/jobs/useGetAppliedJobs";

import JobItem from "../../../components/job/JobItem";

const AppliedJobs = () => {
  const { id } = useParams();
  const { appliedJobs } = useGetAppliedJobs({ id });
  return (
    <div>
      {appliedJobs?.map((item) => (
        <JobItem
          key={item._id}
          status={item.candidateList.filter((x) => x.user === id)[0].status}
          item={item}
        />
      ))}
    </div>
  );
};

export default AppliedJobs;
