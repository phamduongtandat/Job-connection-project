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

  const populatedMessage = await Message.findById(message._id)
    .populate({
      path: 'from',
      select: 'email name profileImage',
    })
    .populate({
      path: 'to',
      select: 'email name profileImage',
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
    data: populatedMessage,
  });
};

const getLastDirectMessages = async (req, res) => {
  const currentUser = req.user._id;

  const messages = await Message.find({
    $or: [
      {
        from: currentUser,
        to: {
          $ne: undefined,
        },
      },
      {
        to: currentUser,
      },
    ],

    isLastMessage: true,
  })
    .populate({
      path: 'from',
      select: 'name email',
    })
    .populate({
      path: 'to',
      select: 'name email',
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

const getUserSupportMessages = async (req, res) => {
  const messages = await Message.find({
    messageType: 'support',
    $or: [
      {
        from: req.user._id,
      },
      {
        to: req.user._id,
      },
    ],
  })
    .populate({
      path: 'from',
      select: 'name email profileImage',
    })
    .populate({
      path: 'to',
      select: 'name email profileImage',
    });

  res.status(200).json({
    status: 'success',
    data: messages,
  });
};

//
const getUserPendingMessages = async (req, res) => {
  const userId = req.params.userId;

  const messages = await Message.find({
    from: userId,
    to: undefined,
  }).populate({
    path: 'from',
    select: 'name email',
  });

  res.status(200).json({
    status: 'success',
    data: messages,
  });
};

// pending message is a support message that is not replied
const getLastPendingMessages = async (req, res) => {
  const messages = await Message.find({
    to: undefined,
    isLastMessage: true,
  }).populate({
    path: 'from',
    select: 'name email',
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
  getUserPendingMessages,
  getLastDirectMessages,
  getMessagesWithOne,
  getLastPendingMessages,
  getUserSupportMessages,
  startSupportChat,
  endSupportChat,
};

export default messageController;
