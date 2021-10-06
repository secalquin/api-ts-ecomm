import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const TOKEN_SECRET = process.env.TOKEN_SECRET || "SECRET";

export const authenticateToken = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  //console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return resp.sendStatus(401);

  jwt.verify(token, TOKEN_SECRET, (err: any, user: any) => {
    if (err) return resp.sendStatus(403);

    req.user = user;
    next();
  });
};
