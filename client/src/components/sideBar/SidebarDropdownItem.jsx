import { NavLink } from 'react-router-dom';

const SidebarDropdownItem = () => {
  return (
    <li className="py-2 hover:text-text">
      <NavLink
        to="/sss"
        className={({ isActive }) => (isActive ? 'text-text font-medium' : '')}
      >
        test
      </NavLink>
    </li>
  );
};

export default SidebarDropdownItem;
