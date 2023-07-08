import React from "react";
import { Routes, Route } from "react-router-dom";

import JobTab from "./../../components/layout/JobTab";

import AppliedJobs from "./../profile/appliedJobs/AppliedJobs";
import AllJobs from "./AllJobs";
function JobListPage() {
  return (
    <div>
      <JobTab>
        <Routes>
          <Route path="job-list" element={<AllJobs />} />
          <Route path="applied-jobs/:id" element={<AppliedJobs />} />
        </Routes>
      </JobTab>
    </div>
  );
}

export default JobListPage;
