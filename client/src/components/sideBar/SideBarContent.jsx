import OpenSignInFormBtn from '../auth/OpenSignInFormBtn';
import OpenSignUpFormBtn from '../auth/OpenSignUpFormBtn';
import SideBarDropDown from './SideBarDropdown';
import SidebarDropdownItem from './SidebarDropdownItem';

const SideBarContent = () => {
  return (
    <div className="w-72 p-6 flex flex-col gap-y-1 items-start text-text-light">
      <OpenSignUpFormBtn className="mb-5">Tạo tài khoản mới</OpenSignUpFormBtn>
      <OpenSignInFormBtn className="bg-transparent py-2 px-0 font-normal text-inherit hover:text-text" />
      <SideBarDropDown>
        <SidebarDropdownItem></SidebarDropdownItem>
        <SidebarDropdownItem></SidebarDropdownItem>
        <SidebarDropdownItem></SidebarDropdownItem>
        <SidebarDropdownItem></SidebarDropdownItem>
      </SideBarDropDown>
    </div>
  );
};

export default SideBarContent;
