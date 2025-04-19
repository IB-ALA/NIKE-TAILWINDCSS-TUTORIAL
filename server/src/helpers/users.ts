import { User, users } from "../data/user";

export function getUser(id: string): User | undefined {
  return users.find((user: User) => user.id === id);
}
