import userModel from "../models/users.model.js";
import { setUser } from "../service/auth.js";
export async function createUserSignup(req, res) {
  const { name, email, password } = req.body;
  const newUser = await userModel
    .create({ name, email, password })
    .then(() => {
      return res.status(201).json({ msg: "User created Successfully" });
    })
    .catch((err) => {
      return res.json({ msg: err.message });
    });
}
export async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });
  if (!user) return res.status(404).json({ msg: "Email/ Password invalid" });
  console.log(user);
  const token = setUser(user);
  res.cookie("uid", token);
  return res.send(`Welcome back ${user?.name.toUpperCase()}.`);
}
