import { User as UserDocument } from "../models/User";
import { User as UserType } from "../types/user";

export function createUser(user: UserDocument): UserType {
  return {
    userId: user._id as string,
    name: user.name,
    email: user.email,
  };
}
