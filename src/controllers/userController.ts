import { Request, Response } from "express";
import { now } from "mongoose";
import IUser from "../interface/user";
import { User } from "../models/user";

export const loginUser = async (req: Request, resp: Response) => {
  resp.json("Login Method");
};

export const todoUser = async (req: Request, resp: Response) => {
  User.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      resp.json(result);
    }
  });
};

export const createUser = async (req: Request, resp: Response) => {
  const user: IUser = req.body;

  try {
    const newUser = new User({
      username: user.email,
      password: user.password,
      url_img: user.url_img,
      created_at: now().toDateString(),
    });

    resp.json({ msg: "User create succefully", user: newUser });
  } catch (error) {
    resp.status(500).json({ msg: "Error to create User" });
  }
};
