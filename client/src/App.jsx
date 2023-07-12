import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LinkNotFound from "./components/linkNotFound/LinkNotFound";
import UIContainer from "./components/uiContainer/UIContainer";
import AdminPage from "./pages/admin/AdminPage";
import Home from "./pages/home/Home";
import ProfilePage from "./pages/profile/ProfilePage";

import JobDetailPage from "./pages/job/JobDetailPage";
import JobListPage from "./pages/job/JobListPage";

export default function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/jobs/all-jobs/*" element={<JobListPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<LinkNotFound />} />
        </Routes>
      </Layout>
      <UIContainer />
      <ReactQueryDevtools />
    </main>
  );
}
