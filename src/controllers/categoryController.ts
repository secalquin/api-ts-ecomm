import axios from "axios";
import { Request, Response } from "express";

export const getAllCategories = async (req: Request, resp: Response) => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    return resp.json({ msg: "getAllCategories Method", data });
  } catch (error: Error | any) {
    resp.json({ msg: "getAllCategories Method", error: error.message });
  }
};

export const getCategoryWithProducts = () => {};
