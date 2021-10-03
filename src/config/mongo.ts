import mongoose from "mongoose";

const MongooseConfig = {
  MONGO_URL: process.env.MONGO_URL || "localhost",
  MONGO_PORT: process.env.MONGO_PORT || "27017",
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mydatabase",
  MONGO_USERNAME: process.env.MONGO_USERNAME || "root",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "example",
};

const {
  MONGO_URL,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = MongooseConfig;

const mongoDBConnect = async () => {
  try {
    await mongoose.connect(
      `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}:${MONGO_PORT}/${MONGO_DATABASE}`,
      {},
      () => console.log("connected to database")
    );
  } catch (error) {
    console.log("Ha Ocurrido un problema con iniciar mongo");
  }
};

export default mongoDBConnect;
