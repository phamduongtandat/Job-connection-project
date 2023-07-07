import { NavLink, useLocation } from 'react-router-dom';
import useGetAuthInfo from '../../hooks/useGetAuthInfo';
import useGetLastMessages from '../../react-query/messages/useGetLastMessages';
import useGetLastPendingMessages from '../../react-query/messages/useGetLastPendingMessages';

const Receiver = ({ from, to, content, currentUserId }) => {
  const sender = from && from._id === currentUserId ? 'me' : 'other';

  let receiver;

  if (!from) {
    receiver = to;
  }

  if (!to) {
    receiver = from;
  }

  if (from && to) {
    if (from._id === currentUserId) receiver = to;
    if (to._id === currentUserId) receiver = from;
  }

  return (
    <NavLink
      to={receiver._id}
      className={({ isActive }) =>
        `flex gap-x-4 py-3 hover:bg-gray-100 cursor-pointer px-4 ${
          isActive ? 'bg-gray-100' : ''
        }`
      }
    >
      <img
        src="https://i.pinimg.com/originals/27/70/b8/2770b8a2da020db3b50dd5db243dfedd.jpg"
        className="w-12 h-12 object-cover object-center rounded-full"
      />
      <div className="flex flex-col justify-between">
        <div>{receiver.name || receiver.email}</div>
        <div className="text-text-light text-sm">
          {sender === 'me' ? `Bạn: ${content}` : content}
        </div>
      </div>
    </NavLink>
  );
};

const ReceiverList = () => {
  const pathname = useLocation().pathname;
  const { user } = useGetAuthInfo();
  const { data: lastMessages, isLoading: isLoadingLastMessages } =
    useGetLastMessages();
  const { data: pendingMessages, isLoadingLastPendingMessages } =
    useGetLastPendingMessages();

  let messages = [];

  if (pathname.startsWith('/admin/messages/direct')) {
    messages = lastMessages;
  }

  if (pathname.startsWith('/admin/messages/pending')) {
    messages = pendingMessages;
  }

  return (
    <div className="w-96 bg-white border-l h-screen flex-shrink-0">
      {!isLoadingLastMessages &&
        !isLoadingLastPendingMessages &&
        !messages?.length && (
          <div className="px-4 py-4">Không có tin nhắn nào được tìm thấy</div>
        )}
      {messages?.map((message) => (
        <Receiver
          key={message._id}
          content={message.content}
          from={message.from}
          to={message.to}
          currentUserId={user._id}
        />
      ))}
    </div>
  );
};

export default ReceiverList;
