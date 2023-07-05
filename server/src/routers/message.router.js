import express from 'express';
import messageController from '../controllers/message.controller.js';
import requireLogin from '../middleware/requireLogin.js';
import requireRole from '../middleware/requireRole.js';
import validateReqBody from '../middleware/validateReqBody.js';
import { createMessageSchema } from '../validation/message.schema.js';

const messageRouter = express.Router();

messageRouter.use(requireLogin());
messageRouter.post(
  '/',
  validateReqBody(createMessageSchema),
  messageController.createMessage,
);
messageRouter.get('/last-messages', messageController.getLastMessages);

messageRouter.get(
  '/pending-messages',
  requireRole('admin'),
  messageController.getPendingMessages,
);

messageRouter.get('/users/:userId', messageController.getMessagesWithOne);

messageRouter.put(
  '/start-support-chat/:userId',
  messageController.startSupportChat,
);

messageRouter.put(
  '/end-support-chat/:userId',
  messageController.endSupportChat,
);

export default messageRouter;
