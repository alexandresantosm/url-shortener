import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export class MongoConnection {
  async connect(): Promise<void> {
    const connectStringMongoDB = process.env.MONGO_CONNECTION;
    try {
      await mongoose.connect(connectStringMongoDB);
      console.log("Database connected");
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  }
}
