import './config.js'
import express from 'express';
import cookieParser from 'cookie-parser';
import userController from './controllers/userController.js';
import surveyController from './controllers/surveyController.js'
const app = express();
const port = 3000;


app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user", userController);
app.use("/api/survey", surveyController);

app.listen(port, () => {
    console.log("Server started at " + port);
});


