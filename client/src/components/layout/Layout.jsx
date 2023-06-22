import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import useGetAuthInfo from '../../hooks/useGetAuthInfo';
import useSideBar from '../../hooks/useSideBar';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import OpenSideBarBtn from '../sideBar/OpenSideBarBtn';
import SideBarContent from '../sideBar/SideBarContent';

const Layout = (props) => {
  const { isAdminAccount } = useGetAuthInfo();
  const { pathname } = useLocation();
  const { isStaticSideBarOpen } = useSideBar();

  return (
    <div className="flex">
      <div className="flex-grow">
        {!isAdminAccount && <Header />}
        <div className="flex">
          {isAdminAccount && isStaticSideBarOpen && <SideBarContent />}
          {!isStaticSideBarOpen && (
            <OpenSideBarBtn className="fixed top-3 left-3">
              <AiOutlineMenu size={24} />
            </OpenSideBarBtn>
          )}

          <div className="min-h-screen flex-grow">{props.children}</div>
        </div>
        {!isAdminAccount && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
