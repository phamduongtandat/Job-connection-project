import { Tooltip } from 'react-tooltip';
import AuthModal from '../../pages/auth/AuthModal';
import useGetCurrentUser from '../../react-query/auth/useGetCurrentUser';
import ConfirmModal from '../confirmModal/ConfirmModal';
import SideBarContainer from '../sideBar/SideBarContainer';

const UIContainer = () => {
  useGetCurrentUser();

  return (
    <>
      <AuthModal />
      <SideBarContainer />
      <ConfirmModal />
      <Tooltip id="tooltip" />
    </>
  );
};

export default UIContainer;
