import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar, openSideBar } from '../store/sideBarSlice';

const useSideBar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sideBar.isOpen);

  const handleOpenSideBar = () => {
    dispatch(openSideBar());
  };

  const handleCloseSideBar = () => {
    dispatch(closeSideBar());
  };

  return {
    isOpen,
    handleOpenSideBar,
    handleCloseSideBar,
  };
};

export default useSideBar;
