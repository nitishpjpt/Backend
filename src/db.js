import mongoose from 'mongoose';


const DB_NAME = 'gym';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('mongodb is not connected', error);
  }
};

export { connectDB };
