import useSideBar from '../../hooks/useSideBar';
import Button from '../button/Button';

const OpenSideBarBtn = ({ children, className }) => {
  const { handleOpenSideBar } = useSideBar();

  return (
    <Button className={className} onClick={handleOpenSideBar}>
      {children}
    </Button>
  );
};

export default OpenSideBarBtn;
