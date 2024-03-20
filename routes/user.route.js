import express from "express";
import {
  createUserSignup,
  handleUserLogin,
} from "../controllers/user.controller.js";

const router = express.Router();
router.post("/", createUserSignup);
router.get("/", handleUserLogin);
export default router;
