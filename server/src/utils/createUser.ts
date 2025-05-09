import { UserDocument } from "../models/User";
import { UserType } from "../types/user";
import { Types } from "mongoose";

export function createUser(user: UserDocument): UserType {
  return {
    userId: (user._id as Types.ObjectId).toString(),
    name: user.name,
    email: user.email,
  };
}
