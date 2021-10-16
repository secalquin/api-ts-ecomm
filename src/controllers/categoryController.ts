import axios from "axios";
import { Request, Response } from "express";
import IProduct from "../interfaces/product";

export const getAllCategories = async (req: Request, resp: Response) => {
  try {
    const { data }: { data: string[] } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    return resp.json({ msg: "getAllCategories Method", data });
  } catch (error: Error | any) {
    resp.json({ msg: "getAllCategories Method", error: error.message });
  }
};

export const getCategoryWithProducts = async (req: Request, resp: Response) => {
  try {
    const { categoryName }: { categoryName?: string } = req.params;

    const dataFetched = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );

    const { data }: { data: IProduct[] } = dataFetched;

    return resp.json({ msg: "getAllCategories Method", data });
  } catch (error: Error | any) {
    resp.json({ msg: "getCategoryWithProducts Method", error: error.message });
  }
};
