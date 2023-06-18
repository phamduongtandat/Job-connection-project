import AuthModal from '../../pages/auth/AuthModal';
import SectionContainer from '../container/SectionContainer';

const Header = () => {
  return (
    <header>
      <SectionContainer
        wrapperClassName="py-4 border-b"
        className="flex justify-end"
      >
        <AuthModal />
      </SectionContainer>
    </header>
  );
};

export default Header;
