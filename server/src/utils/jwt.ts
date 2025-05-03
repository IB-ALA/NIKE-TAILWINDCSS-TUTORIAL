import jwt from "jsonwebtoken";

export function createUserToken({ payload }: { payload: any }): string {
  const token: string = jwt.sign(payload, process.env.JWT_SECRET!);
  return token;
}

// const user = {
//   name: "ala",
//   id: "uhir7h8yh8ub4",
// };

// const token = createUserToken({ payload: { user } });
// console.log(token);
