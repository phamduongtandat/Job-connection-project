import { useLocation } from 'react-router-dom';
import useGetAuthInfo from '../../hooks/useGetAuthInfo';
import useSideBar from '../../hooks/useSideBar';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideBarContent from '../sideBar/SideBarContent';

const Layout = (props) => {
  const { isAdminAccount } = useGetAuthInfo();
  const { pathname } = useLocation();
  const { isStaticSideBarOpen } = useSideBar();

  return (
    <div className="flex">
      <div className="flex-grow">
        <Header />
        <div className="flex">
          {isAdminAccount &&
            isStaticSideBarOpen &&
            pathname.startsWith('/admin') && <SideBarContent />}
          <div className="min-h-screen flex-grow">{props.children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
