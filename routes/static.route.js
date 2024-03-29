import express from "express";
import URL from "../models/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allURLS = await URL.find({ createdBy: req.user.id });
  return res.render("home", { urls: allURLS });
});

export default router;
