import cors from 'cors';
import express from 'express';
import indexRouter from '../routers/index.js';

const app = express();

//middlewares for express
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

app.use(indexRouter);

export { app };
