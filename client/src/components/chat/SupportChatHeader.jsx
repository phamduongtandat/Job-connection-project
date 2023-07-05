import { IoMdClose } from 'react-icons/io';

const SupportChatHeader = ({ closeChat }) => {
  return (
    <div className="relative bg-white px-4 py-4 border-b">
      <h3 className="text-2xl font-semibold">Nhắn tin với support</h3>
      <button
        onClick={closeChat}
        className="absolute right-2 top-2 text-text-light hover:text-error"
      >
        <IoMdClose size={30} />
      </button>
    </div>
  );
};

export default SupportChatHeader;
