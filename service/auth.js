import jwt from "jsonwebtoken";

const secret = "abcdefghi$@#";
export function setUser(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secret);
}
export function getUser(token) {
  return jwt.verify(token, secret);
}
