import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    console.log("point 1");
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        dbName: "Cluster0",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("point 2");
    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
};
