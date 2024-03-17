import express from "express";
import urlRoute from "./routes/url.route.js";
import { dbconnection } from "./connection.js";
const app = express();
const PORT = 7000;

dbconnection("mongodb://localhost:27017/urls");
app.use(express.json());
app.use("/urlshortener", urlRoute);
app.listen(PORT, () => {
  console.log("Server is listening at port " + PORT);
});
