import { Route, Routes } from 'react-router-dom';
import RequireAdmin from '../../components/hoc/RequireAdmin';
import RequireLogin from '../../components/hoc/RequireLogin';
import LinkNotFound from '../../components/linkNotFound/LinkNotFound';
import FieldsList from './fields/FieldsList';
import JobsList from './jobs/JobsList';
import UsersList from './users/UsersList';

const ProfilePage = () => {
  return (
    <RequireLogin>
      <RequireAdmin>
        <div className="bg-base py-6 min-h-screen px-16">
          <div className="flex-grow rounded-sm">
            <Routes>
              <Route path="users" element={<UsersList />} />
              <Route path="fields" element={<FieldsList />} />
              <Route path="jobs" element={<JobsList />} />
              <Route path="*" element={<LinkNotFound />} />
            </Routes>
          </div>
        </div>
      </RequireAdmin>
    </RequireLogin>
  );
};

export default ProfilePage;
