import mongoose, { now } from "mongoose";
import IUser from "../interfaces/user";

const userSchema = new mongoose.Schema<IUser>({
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
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

userSchema.post("save", function (error: any, doc: any, next: any) {
  if (error.name === "MongoError" && error.code === 11000) {
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
