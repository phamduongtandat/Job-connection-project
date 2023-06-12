import express from 'express';
import authController from '../controllers/auth.controller.js';
import requireLogin from '../middleware/requireLogin.js';
import validateRequestBody from '../middleware/validateRequest.js';
import {
  createResetPasswordTokenSchema,
  registerUserSchema,
  resetPasswordWithTokenSchema,
  signInSchema,
  updateCurrentUserSchema,
  updatePasswordSchema,
} from '../validation/auth.schema.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  validateRequestBody(registerUserSchema),
  authController.registerUser,
);

authRouter.post(
  '/sign-in',
  validateRequestBody(signInSchema),
  authController.signIn,
);

authRouter.delete('/sign-out', authController.signOut);
authRouter.get(
  '/current-user',
  requireLogin(),
  authController.getCurrentLoggedInUser,
);

authRouter.put(
  '/current-user',
  requireLogin(),
  validateRequestBody(updateCurrentUserSchema),
  authController.updateCurrentUser,
);

authRouter.put(
  '/update-password',
  requireLogin(),
  validateRequestBody(updatePasswordSchema),
  authController.updatePassword,
);

authRouter.post(
  '/reset-password-token',
  validateRequestBody(createResetPasswordTokenSchema),
  authController.createResetPasswordToken,
);

authRouter.put(
  '/reset-password/:token',
  validateRequestBody(resetPasswordWithTokenSchema),
  authController.resetPasswordWithToken,
);

export default authRouter;
