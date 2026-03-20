import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoAtlasUri = process.env.MONGODB_URI;

    if (!mongoAtlasUri) {
      throw new Error("MONGODB_URI is required");
    }

    await mongoose.connect(mongoAtlasUri);
    console.log("MongoDB Atlas Connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
    process.exit(1);
  }
};

export default connectDB;
