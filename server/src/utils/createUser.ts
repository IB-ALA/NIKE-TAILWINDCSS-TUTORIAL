import { User as UserDocument } from "../models/User";

export function createUser(user: UserDocument) {
  return {
    userId: user._id,
    name: user.name,
    email: user.email,
  };
}
