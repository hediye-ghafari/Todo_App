import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState) return;
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connect to db");
}

export default connectDB;
