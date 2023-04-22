import { Router } from "express";
import { createSurvey, getPollResults, getUserSurveyResult } from "../handlers/surveyHandler.js";
import { surveyCheck } from "../handlers/userHandler.js";
const router = Router();

router.post("/new-survey", surveyCheck, createSurvey);
router.post("/poll-results", getPollResults);
router.post("/user-survey-results", getUserSurveyResult);

export default router;