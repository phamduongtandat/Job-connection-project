// config env
import dotenv from 'dotenv';
dotenv.config({
  path: './prod.env',
});

import { app } from './config/app.js';
import { connectDB } from './config/db.js';

// connect to db
connectDB();

// start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running with port ${process.env.PORT}`);
});
