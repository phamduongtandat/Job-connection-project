import express from 'express';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.status(200).send('sss');
});

indexRouter.use('/api/v1/auth', authRouter);
indexRouter.use('/api/v1/users', userRouter);

export default indexRouter;
