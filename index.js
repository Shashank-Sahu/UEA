import './config.js'
import express from 'express';
import cookieParser from 'cookie-parser';
import userController from './controllers/userController.js';
import surveyController from './controllers/surveyController.js'
import cors from 'cors';
const app = express();
const port = 8080;

const corsOptions = {
    origin: 'https://user-engagement-analytics.netlify.app',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userController);
app.use("/api/survey", surveyController);

app.listen(port, () => {
    console.log("Server started at " + port);
});


