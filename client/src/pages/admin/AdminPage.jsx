import { Route, Routes } from 'react-router-dom';
import SectionContainer from '../../components/container/SectionContainer';
import RequireAdmin from '../../components/hoc/RequireAdmin';
import RequireLogin from '../../components/hoc/RequireLogin';
import LinkNotFound from '../../components/linkNotFound/LinkNotFound';
import AdminPageNav from './AdminPageNav';
import FieldsList from './fields/FieldsList';
import JobsList from './jobs/JobsList';
import UsersList from './users/UsersList';

const ProfilePage = () => {
  return (
    <RequireLogin>
      <RequireAdmin>
        <SectionContainer
          wrapperClassName="bg-base py-10 min-h-screen"
          className="flex gap-x-12"
        >
          <AdminPageNav />
          <div className="bg-white flex-grow p-6 rounded-sm">
            <Routes>
              <Route path="users" element={<UsersList />} />
              <Route path="fields" element={<FieldsList />} />
              <Route path="jobs" element={<JobsList />} />
              <Route path="*" element={<LinkNotFound />} />
            </Routes>
          </div>
        </SectionContainer>
      </RequireAdmin>
    </RequireLogin>
  );
};

export default ProfilePage;
