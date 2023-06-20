import { MdModeEdit } from 'react-icons/md';

const EditButton = ({ className, ...btnProps }) => {
  return (
    <button {...btnProps} className={`hover:text-primary ${className}`}>
      <MdModeEdit size={22} />
    </button>
  );
};

export default EditButton;
