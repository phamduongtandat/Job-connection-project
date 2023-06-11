import mongoose from 'mongoose';

//connect DB
const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('DB connected');
  });
};

export { connectDB };
