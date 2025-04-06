import express from "express";
import { signupController } from "../controller/signupController.js";
import { LoginController } from "../controller/loginController.js";
const router =express.Router();
router.route("/api/signup").post(signupController)
router.route("/api/Loginup").post(LoginController)
export default router;