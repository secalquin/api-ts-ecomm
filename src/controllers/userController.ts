import { Request, response, Response } from "express";
import { now } from "mongoose";
import IUser from "../interfaces/user";
import { User } from "../models/user";

export const loginUser = async (req: Request, resp: Response) => {
  resp.json("Login Method");
};

export const todoUser = async (req: Request, resp: Response) => {
  const users = await User.find({});

  resp.json({ msg: "Get all users", data: users });
};

export const createUser = async (req: Request, resp: Response) => {
  const user: IUser = req.body;

  try {
    const newUser = new User({
      username: user.email,
      password: user.password,
      email: user.email,
      created_at: now().toDateString(),
      updated_at: now().toDateString(),
    });
    await newUser.save();
    resp.json({ msg: "User create succefully", newUser });
  } catch (error: any) {
    resp.status(400).json({ msg: error.message });
  }
};

export const whoami = (req: Request, resp: Response) => {
  return resp.json({ msg: "User Whoami Method" });
};
