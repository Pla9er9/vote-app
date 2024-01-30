import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const envDbUrl = process.env.MONGODB_URL;
    let url = "";
    if (envDbUrl != undefined) {
      url = envDbUrl;
    }
    await mongoose.connect(url);
    console.log("- Connected to MONGO DB");
  } catch (e) {
    console.log("Error connecting to db: ", e);
  }
};
