import { Request, Response } from "express";
import IUser from "../interfaces/user";
import { User } from "../models/user";
import jwt from "jsonwebtoken";
import moment from "moment";

const TOKEN_SECRET = process.env.TOKEN_SECRET || "SECRET";
const TOKEN_EXPIRED = process.env.TOKEN_SECRET || "1";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}

export const loginUser = async (req: Request, resp: Response) => {
  const { email, password }: { email: string; password: string } = req.body;

  /** */
  if (!(email === "scalquin@sb.cl" && password === "SebA661802.")) {
    return resp.status(401).send({
      msg: "Usuario o contraseña inválidos",
    });
  }

  const payload = {
    username: "Sebastián",
    id: "123123123",
  };

  var token = jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: moment().add(parseInt(TOKEN_EXPIRED), "hours").unix(),
  });

  resp.json({ msg: "Logged In", token });
};

export const todoUser = async (req: Request, resp: Response) => {
  try {
    const users = await User.find({}).select(["-password"]);

    resp.json({ msg: "Get all users", data: users });
  } catch (error: any) {
    resp.status(400).json({ msg: error.message });
  }
};

export const createUser = async (req: Request, resp: Response) => {
  const user: IUser = req.body;

  try {
    const newUser = new User({
      username: user.email,
      password: user.password,
      email: user.email,
    });
    await newUser.save();
    resp.json({ msg: "User create succefully", newUser });
  } catch (error: any) {
    resp.status(400).json({ msg: error.message });
  }
};

export const whoami = async (req: Request, resp: Response) => {
  resp.json({
    msg: "Whoami Method",
    user: req.user,
  });
};
