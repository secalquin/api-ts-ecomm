import { Request, Response } from "express";
import axios from "axios";
import { client } from "../config/redis";
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

    const { data } = await axios.get("https://fakestoreapi.com/products");

    await SET_ASYNC("products", JSON.stringify(data), "EX", REDIS_TIME);

    return resp.json({ msg: "getAllProduct Method", data });
  } catch (error: any) {
    return resp.json({ msg: "getAllProduct Method", error: error.message });
  }
};
