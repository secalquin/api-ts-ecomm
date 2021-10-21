import mongoose from "mongoose";

const MongooseConfig = {
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  MONGO_PORT: process.env.MONGO_PORT || "27017",
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mydatabase",
  MONGO_USERNAME: process.env.MONGO_USERNAME || "root",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "example",
  MONGO_POOLSIZE: process.env.MONGO_POOLSIZE || "2",
};

const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_POOLSIZE,
} = MongooseConfig;

const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

const mongoDBConnect = async () => {
  await mongoose
    .connect(MONGO_URI, {
      user: MONGO_USERNAME,
      pass: MONGO_PASSWORD,
      authSource: "admin",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      poolSize: parseInt(MONGO_POOLSIZE),
    })
    .then((res) => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(`Connection MongoDB error occured -`, err);
    });
};

const MongooseCloseConection = async () => {
  await mongoose.connection.close();
};

export { mongoDBConnect, MongooseCloseConection };
