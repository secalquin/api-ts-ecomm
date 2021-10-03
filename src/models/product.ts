import mongoose, { now } from "mongoose";
import IProduct from "../interfaces/product";
import { Store } from "./store";

const productSchema = new mongoose.Schema<IProduct>({
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stores: [
    { type: [mongoose.Schema.Types.ObjectId], ref: Store, required: true },
  ],
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

export const Product = mongoose.model("Product", productSchema);
