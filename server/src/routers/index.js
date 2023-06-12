import express from 'express';
import authRouter from './auth.router.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.status(200).send('sss');
});

indexRouter.use('/api/v1/auth', authRouter);

export default indexRouter;
