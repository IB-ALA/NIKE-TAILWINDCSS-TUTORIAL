import { NextFunction, Request, Response } from "express";
import { User } from "../types/user";
import jwt from "jsonwebtoken";

// we are extending Request 'cause we are attaching "user" to the requesst.
export interface AuthenticatedRequest extends Request {
  user?: User;
}

export function authUserId(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const userToken: string = req.params.id;
  // console.log({ userToken });

  jwt.verify(userToken, "supersecretkey", (err, decoded) => {
    if (err) {
      console.log(err);
      res.status(404).json({ error: "User varification failed" });
      return;
    } else {
      // attach the user to the request object
      const reqUser = (decoded as { user: User })?.user;
      req.user = reqUser;
      next();
    }
  });
}
