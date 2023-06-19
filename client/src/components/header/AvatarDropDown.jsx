import { Menu, Transition } from '@headlessui/react';
import useGetAuthInfo from '../../hooks/useGetAuthInfo';
import useSignOut from '../../react-query/auth/useSignOut';
import Avatar from '../avatar/Avatar';
import AvatarDropDownItem from './AvatarDropDownItem';

function AvatarDropDown() {
  const { isAdminAccount, isBusinessAccount, isPersonalAccount } =
    useGetAuthInfo();

  const { isLoading, signOut } = useSignOut();

  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <Avatar className="w-9" />
      </Menu.Button>
      <Transition
        as={'div'}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="div"
          className="absolute right-0 -bottom-3 translate-y-full border bg-white w-60 rounded-sm shadow-sm px-6 py-2 text-text-light"
        >
          <AvatarDropDownItem to="/admin/users" isShowing={isAdminAccount}>
            Quản trị admin
          </AvatarDropDownItem>
          <AvatarDropDownItem
            isShowing={!isAdminAccount}
            to="/profile/user-info"
          >
            Tài khoản
          </AvatarDropDownItem>
          <AvatarDropDownItem
            isShowing={isBusinessAccount}
            to="/profile/posted-jobs"
          >
            Tin tuyển dụng đã đăng
          </AvatarDropDownItem>
          <AvatarDropDownItem
            isShowing={isPersonalAccount}
            to="/profile/applied-jobs"
          >
            Công việc đã ứng tuyển
          </AvatarDropDownItem>
          <AvatarDropDownItem to="/profile/update-password">
            Đổi mật khẩu
          </AvatarDropDownItem>
          <Menu.Item
            as="button"
            onClick={signOut}
            disabled={isLoading}
            className="py-2 hover:text-primary"
          >
            Đăng xuất
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default AvatarDropDown;
