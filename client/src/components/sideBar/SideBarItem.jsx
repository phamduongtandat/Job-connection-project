import { NavLink } from 'react-router-dom';

const SideBarItem = ({ children, isShowing = true, to }) => {
  if (!isShowing) return null;

  return (
    <NavLink
      className={({ isActive }) =>
        `text-text-light py-2 block w-full hover:text-text ${
          isActive ? 'font-medium !text-primary' : ''
        }`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default SideBarItem;
