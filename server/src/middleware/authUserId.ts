import { users, UserType } from "../data/user";

export function authUserID(id: string): UserType | undefined {
  return users.find((user: UserType) => user.id === id);
}

// complete it later
