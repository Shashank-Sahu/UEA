import { Router } from "express";
import { registerUser, loginUser, logoutUser, verifyUser, surveyCheck } from "../handlers/userHandler.js";
const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete("/logout", logoutUser);

router.get("/verify", verifyUser);

router.post("/survey-check", surveyCheck);

export default router;