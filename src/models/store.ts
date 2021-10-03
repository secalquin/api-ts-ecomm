import mongoose, { now } from "mongoose";
import IStore from "../interfaces/store";

const storeSchema = new mongoose.Schema<IStore>({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
  },
  created_at: {
    type: String,
    required: true,
    default: now().toDateString(),
  },
  updated_at: {
    type: String,
    required: true,
    default: now().toDateString(),
  },
});

export const Store = mongoose.model("Store", storeSchema);
