import mongoose, { now } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
    default: now().toDateString(),
  },
});

export const User = mongoose.model("User", userSchema);
