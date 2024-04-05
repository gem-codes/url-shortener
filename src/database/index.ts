import mongoose from 'mongoose';
import { DATABASE_NAME } from '../constants';

const connectDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DATABASE_NAME}`)
    console.log(`\n DATABASE CONNECTED: HOST ${connectionInstance.connection.host}`);
  } catch (error: any) {
    console.log(`DATABASE: ${error.message}`);
    process.exit(1);
  }
}

export default connectDatabase;
