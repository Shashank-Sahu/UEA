import { Router } from "express";
import { createSurvey, getPollResults } from "../handlers/surveyHandler.js";
const router = Router();

router.post("/new-survey", createSurvey);
router.get("/poll-results", getPollResults);

export default router;