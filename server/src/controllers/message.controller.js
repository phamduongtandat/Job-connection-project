import { Message } from '../models/message.model.js';
import { User } from '../models/user.model.js';

const createMessage = async (req, res) => {
  const { content, to, messageType } = req.body;
  const from = req.user?._id;

  // create new message
  const message = await Message.create({
    from: req.user?._id,
    to: to || req.user?.supportId,
    content,
    isLastMessage: true,
    messageType,
  });

  // remove isLastMessage:true from old message
  await Message.findOneAndUpdate(
    {
      $or: [
        { from, to },
        { from: to, to: from },
      ],
      _id: { $ne: message._id },
      isLastMessage: true,
    },
    {
      isLastMessage: false,
    },
  );

  res.status(200).json({
    status: 'success',
    message: 'Your message has been sent',
    data: message,
  });
};

const getLastMessages = async (req, res) => {
  const currentUser = req.user._id;

  const messages = await Message.find({
    $or: [
      {
        from: currentUser,
      },
      {
        to: currentUser,
      },
    ],
    isLastMessage: true,
  });

  res.status(200).json({
    status: 'success',
    data: messages,
  });
};

const getMessagesWithOne = async (req, res) => {
  const to = req.params.userId;
  const from = req.user?._id;

  const messages = await Message.find({
    $or: [
      {
        from,
        to,
      },
      { to, from },
    ],
  }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    status: 'success',
    data: messages,
  });
};

// pending message is a support message that is not replied
const getPendingMessages = async (req, res) => {
  const messages = await Message.find({
    to: undefined,
    isLastMessage: true,
  });

  res.status(200).json({
    status: 'success',
    data: messages,
  });
};

//
const startSupportChat = async (req, res) => {
  const customerId = req.params.userId;
  const adminId = req.user?._id;

  //
  await User.findByIdAndUpdate(customerId, {
    supportId: adminId,
  });

  //

  await Message.updateMany(
    { from: customerId, to: undefined },
    { to: adminId },
  );

  res.status(200).json({
    status: 'success',
    message: 'Your support chat has been started',
  });
};

const endSupportChat = async (req, res) => {
  const customerId = req.params.userId;

  const user = await User.findById(customerId);

  user.supportId = undefined;
  await user.save();

  res.status(200).json({
    status: 'success',
    message: 'Your support chat has been ended',
  });
};

const messageController = {
  createMessage,
  getLastMessages,
  getMessagesWithOne,
  getPendingMessages,
  startSupportChat,
  endSupportChat,
};

export default messageController;
