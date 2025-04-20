import { users } from "../data/user";
import { User } from "../types/user";

export function getUser(id: string): User | undefined {
  return users.find((user: User) => user.id === id);
}
