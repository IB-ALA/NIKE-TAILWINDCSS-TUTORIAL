// import jwt from "jsonwebtoken";

export function createUser(user: any) {
  return {
    userId: user._id,
    name: user.name,
    email: user.email,
  };
}

/*
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjY4MTYyNDQxYTljYjMyNWZlOWU3ZDA2YSIsIm5hbWUiOiJpYi1hbGEiLCJlbWFpbCI6Imlpc2hhcXl1c2lmQGdtYWlsLmNvbSJ9LCJpYXQiOjE3NDYyODIzMTl9.QQY3thuZsVNNNrjdxX4E49DR0MLO8SIo8ezsyrLP80k";

const userToken2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjY4MTYyNDQxYTljYjMyNWZlOWU3ZDA2YSIsIm5hbWUiOiJpYi1hbGEiLCJlbWFpbCI6Imlpc2hhcXl1c2lmQGdtYWlsLmNvbSJ9LCJpYXQiOjE3NDYyODQ3Njl9.LTOXjWowkO4jgYPgfP6P_xIvbLRr8O6yZrLKi9bOnIk";

jwt.verify(userToken, "supersecretkey", (err, decoded) => {
  if (err) {
    console.log(err);
  } else {
    console.log(decoded);
  }
});
*/

// const user = jwtDecode(userToken);
