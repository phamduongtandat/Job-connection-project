import { useLocation } from 'react-router-dom';
import useCreateMessage from '../../react-query/messages/useCreateMessage';
import useEndSupportChat from '../../react-query/messages/useEndSupportChat';
import useGetMessagesWithOne from '../../react-query/messages/useGetMessagesWithOne';
import useGetUserPendingMessages from '../../react-query/messages/useGetUserPendingMessages';
import useStartSupportChat from '../../react-query/messages/useStartSupportChat';
import Button from '../button/Button';
import Messages from './Messages';
import ReceiverList from './ReceiverList';
import SendMessageForm from './SendMessageForm';

const DirectChatContainer = () => {
  const receiverId = useLocation().pathname.split('/').pop();
  const pathname = useLocation().pathname;
  const { data: pendingMessages } = useGetUserPendingMessages(receiverId);
  const { data: directMessages } = useGetMessagesWithOne(receiverId);

  const { startSupportChat, isLoading: isStartingSupportChat } =
    useStartSupportChat();

  const { endSupportChat, isLoading: isEndingSupportChat } =
    useEndSupportChat();

  const handleStartSupportChat = () => {
    if (receiverId.length > 0) startSupportChat(receiverId);
  };

  const handleEndSupportChat = () => {
    if (receiverId.length > 0) endSupportChat(receiverId);
  };

  const messages = pathname.startsWith('/admin/messages/direct')
    ? directMessages
    : pendingMessages;

  // send message
  const { createMessage, isLoading: isSendingMessage } = useCreateMessage({
    sender: 'admin',
  });

  const onSubmit = (data) => {
    if (receiverId.length === 24) {
    }
    createMessage({
      ...data,
      to: receiverId,
    });
  };

  return (
    <div className="flex">
      <ReceiverList />
      <div className="flex-grow px-8">
        {receiverId.length === 24 && (
          <div className="flex flex-col max-w-5xl mx-auto pb-6 bg-white h-screen small-scrollbar">
            {pathname.startsWith('/admin/messages/pending') && (
              <div className="py-4 px-10 border-b space-y-2 bg-gray-50">
                <p>
                  Tin nhắn chờ sẽ được hiển thị cho tất cả quản trị viên. Nếu
                  bạn chấp nhận tin nhắn chờ này, chỉ bạn có thể thấy những tin
                  nhắn sau đó của tài khoản này..
                </p>
                <Button onClick={handleStartSupportChat}>
                  Bắt đầu cuộc hội thoại
                </Button>
              </div>
            )}

            {pathname.startsWith('/admin/messages/direct') && (
              <div className="py-4 px-10 border-b space-y-2 bg-gray-50">
                <p>
                  Sau khi kết thúc hội thoại, những tin nhắn tiếp theo của tài
                  khoản này sẽ được gửi vào tin nhắn chờ. Tất cả quản trị viên
                  có thể đọc được tin nhắn chờ.
                </p>
                <Button onClick={handleEndSupportChat} className="bg-red-400">
                  Kết thúc hội thoại
                </Button>
              </div>
            )}
            <Messages
              isSending={isSendingMessage}
              messages={messages}
              className="!px-10"
            />
            <SendMessageForm
              className="!px-10"
              disabled={pathname.startsWith('/admin/messages/pending')}
              isLoading={isSendingMessage}
              onSubmit={onSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DirectChatContainer;
