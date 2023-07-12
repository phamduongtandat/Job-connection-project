import React from "react";
import { Routes, Route } from "react-router-dom";

import JobTab from "./../../components/layout/JobTab";

import AppliedJobs from "./../profile/appliedJobs/AppliedJobs";
import AllJobs from "./AllJobs";
function JobListPage() {
  return (
    <div className="">
      <JobTab
        tab1="Danh sách việc làm"
        tab2="Công việc đã ứng tuyển"
        navi="job-list"
      >
        <Routes>
          <Route path="job-list" element={<AllJobs />} />
          <Route path="applied-jobs/:id" element={<AppliedJobs />} />
        </Routes>
      </JobTab>
    </div>
  );
}

export default JobListPage;
