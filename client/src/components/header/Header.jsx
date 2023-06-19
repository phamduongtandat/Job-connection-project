import { AiOutlineMenu } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import OpenSignInFormBtn from '../auth/OpenSignInFormBtn';
import OpenSignUpFormBtn from '../auth/OpenSignUpFormBtn';
import SectionContainer from '../container/SectionContainer';
import Logo from '../logo/Logo';
import OpenSideBarBtn from '../sideBar/OpenSideBarBtn';
import AvatarDropDown from './AvatarDropDown';
import FieldsSlider from './Fields';
import SearchBar from './SearchBar';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.user?.role);

  return (
    <header>
      <SectionContainer
        className="px-4 xl:px-0 flex gap-x-4 items-center justify-between"
        wrapperClassName="py-4 border-b"
      >
        <OpenSideBarBtn className="bg-transparent text-text px-0">
          <AiOutlineMenu size={24} />
        </OpenSideBarBtn>
        <Logo />
        <SearchBar className="hidden sm:flex" />
        <div className="flex items-center gap-x-4">
          {!isLoggedIn && (
            <OpenSignInFormBtn className="hidden sm:block bg-transparent text-text/80 whitespace-nowrap" />
          )}
          {!isLoggedIn && <OpenSignUpFormBtn className="whitespace-nowrap" />}
          {isLoggedIn && <AvatarDropDown />}
        </div>
      </SectionContainer>
      <SectionContainer wrapperClassName="border-b hidden md:block">
        <FieldsSlider />
      </SectionContainer>
    </header>
  );
};

export default Header;
