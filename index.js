import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import urlRoute from "./routes/url.route.js";
import userRoute from "./routes/user.route.js";
import staticRoute from "./routes/static.route.js";
import { dbconnection } from "./connection.js";
import restrictToLoggedinUserOnly from "./middlewares/auth.js";
const app = express();
const PORT = 7000;

dbconnection("mongodb://localhost:27017/urls");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/url", staticRoute);
app.use("/users", userRoute);
app.listen(PORT, () => {
  console.log("Server is listening at port " + PORT);
});
