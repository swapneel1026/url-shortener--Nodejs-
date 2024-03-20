import { getUser } from "../service/auth.js";
async function restrictToLoggedinUserOnly(req, res, next) {
  const token = req.cookies.uid;
  if (!token) return res.send("go to login");
  const user = getUser(token);
  if (!user) return res.send("go to login");
  console.log(user, "token");
  req.user = user;
  next();
}
export default restrictToLoggedinUserOnly;
