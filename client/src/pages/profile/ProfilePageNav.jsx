import Avatar from './Avatar';
import NavItem from './NavItem';

const ProfilePageNav = () => {
  return (
    <div className="py-6 bg-white w-80 px-6">
      <Avatar />
      <ul>
        <NavItem to="user-info">Thông tin tài khoản</NavItem>
        <NavItem to="update-password">Đổi mật khẩu</NavItem>
        {/* <NavItem>Đăng xuất</NavItem> */}
      </ul>
    </div>
  );
};

export default ProfilePageNav;
