import express from "express";
import URL from "../models/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allURLS = await URL.find({});
  return res.render("home", { urls: allURLS });
});

export default router;
