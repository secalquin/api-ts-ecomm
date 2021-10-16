import { Request, Response } from "express";
import axios from "axios";
import { client } from "../config/redis";
import IProduct from "../interfaces/product";
const { promisify } = require("util");

const REDIS_TIME = process.env.PRODUCT_EXPIRED_TIME || 200; /*20 seg*/
const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

export const getAllProducts = async (req: Request, resp: Response) => {
  try {
    const replyProducts = await GET_ASYNC("products");
    /**RESPONSE FROM CACHE */
    if (replyProducts)
      return resp.json({
        msg: "getAllProduct Method",
        data: JSON.parse(replyProducts),
      });

    const { data }: { data: IProduct[] } = await axios.get(
      "https://fakestoreapi.com/products"
    );

    await SET_ASYNC("products", JSON.stringify(data), "EX", REDIS_TIME);

    return resp.json({ msg: "getAllProduct Method", data });
  } catch (error: Error | any) {
    return resp.json({ msg: "getAllProduct Method", error: error.message });
  }
};

export const findSingleProduct = async (req: Request, resp: Response) => {
  try {
    const { id }: { id?: number } = req.params;

    const dataFetched = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );

    const data: IProduct = dataFetched.data;

    return resp.json({ msg: "singleProduct Method", data });
  } catch (error: Error | any) {
    return resp.json({ msg: "getAllProduct Method", error: error.message });
  }
};
