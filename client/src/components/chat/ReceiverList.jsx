import { NavLink, useLocation } from 'react-router-dom';
import useGetAuthInfo from '../../hooks/useGetAuthInfo';
import useGetLastMessages from '../../react-query/messages/useGetLastMessages';
import useGetLastPendingMessages from '../../react-query/messages/useGetLastPendingMessages';

const Receiver = ({ from, to, content, currentUserId }) => {
  const sender = from._id === currentUserId ? 'me' : 'other';

  let receiver;

  if ((currentUserId !== from?._id && from) || !to) {
    receiver = from;
  }

  if (currentUserId !== to?._id && to) {
    receiver = to;
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
  const { data: lastMessages } = useGetLastMessages();
  const { data: pendingMessages } = useGetLastPendingMessages();

  let messages = [];

  if (pathname.startsWith('/admin/messages/direct')) {
    messages = lastMessages;
  }

  if (pathname.startsWith('/admin/messages/pending')) {
    messages = pendingMessages;
  }

  return (
    <div className="w-96 bg-white border-l h-screen">
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
