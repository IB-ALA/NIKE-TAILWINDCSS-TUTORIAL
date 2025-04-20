import { NextFunction, Request, Response } from "express";
import { User } from "../types/user";
import { getUser } from "../helpers/users";

// we are extending Request 'cause we are attaching "user" to the requesst.
export interface AuthenticatedRequest extends Request {
  user?: User;
}

export function authUserId(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const userId: string = req.params.id;
  console.log({ userId });
  const user: User | undefined = getUser(userId);

  if (!user) {
    res.status(404).json({ error: "User varification failed" });
    return;
  }

  // attach the user to the request object
  req.user = user;

  next();
}
