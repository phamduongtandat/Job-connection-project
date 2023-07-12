import React, { useState } from "react";
import JobTab from "../../components/layout/JobTab";
import JobDetail from "../../components/job/JobDetail";
import useGetJobDetail from "./../../react-query/jobs/useGetJobDetail";
import { useParams } from "react-router-dom";

function JobDetailPage() {
  const [isSwitch, setIsSwitch] = useState(true);
  const { id } = useParams();
  const { jobDetail } = useGetJobDetail({ id });

  return (
    <div>
      <JobTab
        isSwitch={isSwitch}
        setIsSwitch={setIsSwitch}
        tab1="Chi tiết tuyển dụng"
        tab2="Ứng tuyển"
        button
      >
        {isSwitch ? (
          <JobDetail jobDetail={jobDetail} />
        ) : (
          <div>Phần Ứng tuyển</div>
        )}
      </JobTab>
    </div>
  );
}

export default JobDetailPage;