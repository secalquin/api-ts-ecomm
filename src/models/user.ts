import mongoose, { now } from "mongoose";
import IUser from "../interfaces/user";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  url_img: {
    type: String,
    required: false,
  },
  created_at: {
    type: String,
    required: true,
  },
  updated_at: {
    type: String,
    required: true,
  },
});

userSchema.post("save", function (error: any, doc: any, next: any) {
  if (error.name === "MongoError" && error.code === 11000) {
    console.log(error);
    next(
      new Error(
        "El " +
          Object.keys(error.keyValue) +
          " ya se encuentra en nuestros registros: " +
          Object.values(error.keyValue)
      )
    );
  } else {
    next();
  }
});

export const User = mongoose.model("User", userSchema);
