import mongoose from "mongoose";

const MongooseConfig = {
  MONGO_URL: process.env.MONGO_URL || "localhost",
  MONGO_PORT: process.env.MONGO_PORT || "27017",
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mydatabase",
  MONGO_USERNAME: process.env.MONGO_USERNAME || "root",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "example",
  MONGO_POOLSIZE: process.env.MONGO_POOLSIZE || "2",
};

const {
  MONGO_URL,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_POOLSIZE,
} = MongooseConfig;

const MONGO_URI = `mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_DATABASE}`;

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
      console.log(
        "Connected to Distribution API Database - Initial Connection"
      );
    })
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });
};

export { mongoDBConnect };
