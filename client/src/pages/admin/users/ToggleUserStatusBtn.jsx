import { FaUnlockAlt, FaUserLock } from 'react-icons/fa';

const ToggleUserStatusBtn = ({ status }) => {
  return (
    <button
      data-tooltip-id="tooltip"
      data-tooltip-content={status === 'active' ? 'Khóa' : 'Mở khóa'}
      className={
        status === 'active' ? 'hover:text-error' : 'hover:text-primary'
      }
    >
      {status === 'active' && <FaUserLock size={23} />}
      {status === 'blocked' && <FaUnlockAlt size={22} />}
    </button>
  );
};

export default ToggleUserStatusBtn;
