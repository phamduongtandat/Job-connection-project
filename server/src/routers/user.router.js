import express from 'express';
import userController from '../controllers/user.controller.js';
import parseReqQuery from '../middleware/parseReqQuery.js';
import requireLogin from '../middleware/requireLogin.js';
import requireRole from '../middleware/requireRole.js';
import validateReqBody from '../middleware/validateReqBody.js';
import {
  createNewUserSchema,
  updateUserByIdSchema,
  updateUserStatusSchema,
} from '../validation/user.schema.js';

const userRouter = express.Router();

// admin only router
userRouter.use(requireLogin());
userRouter.use(requireRole('admin'));

// routes
userRouter.get('/', parseReqQuery, userController.getUsers);
userRouter.post(
  '/',
  validateReqBody(createNewUserSchema),
  userController.createNewUser,
);
userRouter.get('/:id', userController.getUserById);
userRouter.put(
  '/:id',
  validateReqBody(updateUserByIdSchema),
  userController.updateUser,
);
userRouter.put(
  '/:id/user-status',
  validateReqBody(updateUserStatusSchema),
  userController.updateUserStatus,
);

export default userRouter;
