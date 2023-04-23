import './config.js'
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import userController from './controllers/userController.js';
import surveyController from './controllers/surveyController.js'
import cors from 'cors';
const app = express();
const port = 8080;
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const corsOptions = {
    origin: 'https://user-engagement-analytics.netlify.app',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userController);
app.use("/api/survey", surveyController);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
    console.log("Server started at " + port);
});


