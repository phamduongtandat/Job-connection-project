import { Route, Routes } from 'react-router-dom';
import SectionContainer from '../../components/container/SectionContainer';
import ProfilePageNav from './ProfilePageNav';
import UpdateCurrentUserInfo from './UpdateCurrentUserInfo';
import UpdatePassword from './UpdatePassword';

const ProfilePage = () => {
  return (
    <SectionContainer
      wrapperClassName="bg-base py-10 min-h-screen"
      className="flex gap-x-12"
    >
      <ProfilePageNav />
      <div className="bg-white flex-grow py-16 px-16 rounded-sm">
        <Routes>
          <Route path="user-info" element={<UpdateCurrentUserInfo />} />
          <Route path="update-password" element={<UpdatePassword />} />
        </Routes>
      </div>
      {/* <Notification /> */}
    </SectionContainer>
  );
};

export default ProfilePage;
