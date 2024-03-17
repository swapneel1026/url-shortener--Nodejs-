import express from "express";
import {
  handleGenerateShortUrl,
  handleRedirect,
} from "../controllers/url.controller.js";

const router = express.Router();

router.post("/", handleGenerateShortUrl);
router.get("/:shortId", handleRedirect);

export default router;
