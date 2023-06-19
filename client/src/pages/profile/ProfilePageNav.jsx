import Avatar from '../../components/avatar/Avatar';
import useGetAuthInfo from '../../hooks/useGetAuthInfo';
import NavItem from './NavItem';

const ProfilePageNav = () => {
  const { isAdminAccount, isBusinessAccount, isPersonalAccount } =
    useGetAuthInfo();

  return (
    <div className="py-6 bg-white w-80 px-6 min-h-[400px] rounded-sm">
      <div className="my-6 mb-8">
        <Avatar />
      </div>
      <ul>
        <NavItem isShowing={!isAdminAccount} to="user-info">
          Thông tin tài khoản
        </NavItem>
        <NavItem isShowing={isAdminAccount} to="admin/users">
          Quản lý tài khoản
        </NavItem>
        <NavItem isShowing={isAdminAccount} to="admin/fields">
          Quản lý lĩnh vực
        </NavItem>
        <NavItem isShowing={isAdminAccount} to="admin/jobs">
          Quản lý tin tuyển dụng
        </NavItem>
        <NavItem isShowing={isBusinessAccount} to="posted-jobs">
          Công việc đã đăng
        </NavItem>
        <NavItem isShowing={isPersonalAccount} to="applied-jobs">
          Công việc đã ứng tuyển
        </NavItem>
        <NavItem to="update-password">Đổi mật khẩu</NavItem>
        {/* <NavItem>Đăng xuất</NavItem> */}
      </ul>
    </div>
  );
};

export default ProfilePageNav;
