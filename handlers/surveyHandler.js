import Poll from "../models/Survey/pollModel.js";
import Survey from "../models/Survey/surveyModel.js";
import User from "../models/User/userModel.js";

////////////////////////////////////////////////////////Survey/Poll Creation////////////////////////////////////////////////////////

const createSurvey = async (req, res) => {
    const surveyCreatedOn = new Date().toLocaleDateString();
    const userAge = req.body.age;
    const userCountry = req.body.country;
    const userState = req.body.state;
    const userEmail = req.body.email;
    const userIndoorData = req.body.indoorData;
    const userOutdoorData = req.body.outdoorData;

    const survey = new Survey({
        createdOn: surveyCreatedOn,
        email: userEmail,
        age: userAge,
        country: userCountry,
        state: userState,
        indoorData: userIndoorData,
        outdoorData: userOutdoorData
    });
    await User.findOneAndUpdate({ email: userEmail }, { lastSubmitted: surveyCreatedOn });
    survey.save().then(async (survey) => {
        Poll.findOne({ createdOn: survey.createdOn })
            .then(poll => {
                if (poll) {
                    poll.userCount++;
                    const sid = survey.indoorData.toJSON();
                    const sod = survey.outdoorData.toJSON();
                    const pid = poll.indoorData.toJSON();
                    const pod = poll.outdoorData.toJSON();
                    for (const [key, value] of Object.entries(sid)) {
                        pid[key] ? pid[key] = Number(pid[key]) + Number(value) : pid[key] = Number(value);
                    }
                    for (const [key, value] of Object.entries(sod)) {
                        pod[key] ? pod[key] = Number(pod[key]) + Number(value) : pod[key] = Number(value);
                    }
                    Poll.findOneAndUpdate(
                        { createdOn: poll.createdOn },
                        {
                            userCount: poll.userCount,
                            indoorData: pid,
                            outdoorData: pod
                        },
                        { new: true },
                    ).then(() => {
                        res.json(survey);
                    });
                }
                else {
                    const newPoll = new Poll({
                        createdOn: survey.createdOn,
                        userCount: 1,
                        indoorData: survey.indoorData,
                        outdoorData: survey.outdoorData
                    });
                    newPoll.save();
                    res.json(survey);
                }
            }).catch(err => {
                res.status(500).json(err);
            })
    })
        .catch(err => {
            res.status(500).json(err);
        });
}

////////////////////////////////////////////////////////Poll Results////////////////////////////////////////////////////////

const getPollResults = (req, res) => {
    const from = req.body.fromDate;
    const to = req.body.toDate;
    Poll.find({ createdOn: { $gte: from, $lte: to } })
        .then(polls => {
            res.json(polls);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

const getUserSurveyResult = (req, res) => {
    const userEmail = req.body.email;
    let fromDate = new Date();
    let toDate = new Date();
    fromDate.setDate(toDate.getDate() - 7);
    fromDate = fromDate.toLocaleDateString();
    toDate = toDate.toLocaleDateString();
    Survey.find({ createdOn: { $gte: fromDate, $lte: toDate }, email: userEmail })
        .then(surveys => {
            res.json(surveys);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

const filterSurvey = (req, res) => {
    const surveyCountry = req.body.country;
    const surveyAgeFrom = req.body.ageFrom;
    const surveyAgeTo = req.body.ageTo;
    const surveyState = req.body.state;
    let toDate = new Date(req.body.toDate);
    let fromDate = new Date(toDate);
    fromDate.setDate(toDate.getDate() - 7);
    fromDate = fromDate.toLocaleDateString();
    toDate = toDate.toLocaleDateString();
    Survey.find({ createdOn: { $gte: fromDate, $lte: toDate }, country: surveyCountry, age: { $gte: surveyAgeFrom, $lte: surveyAgeTo }, state: surveyState })
        .then(surveys => {
            let polls = [];
            surveys.forEach((survey) => {
                if (polls.length) {
                    if (survey.createdOn.getTime() == polls[polls.length - 1].createdOn.getTime()) {
                        let poll = polls[polls.length - 1];
                        poll.userCount++;
                        const sid = survey.indoorData.toJSON();
                        const sod = survey.outdoorData.toJSON();
                        let pid;
                        try {
                            pid = poll.indoorData.toJSON();
                        }
                        catch {
                            pid = poll.indoorData;
                        }
                        let pod;
                        try {
                            pod = poll.outdoorData.toJSON();
                        }
                        catch {
                            pod = poll.outdoorData;
                        }
                        for (const [key, value] of Object.entries(sid)) {
                            pid[key] ? pid[key] = Number(pid[key]) + Number(value) : pid[key] = Number(value);
                        }
                        for (const [key, value] of Object.entries(sod)) {
                            pod[key] ? pod[key] = Number(pod[key]) + Number(value) : pod[key] = Number(value);
                        }
                        poll.indoorData = pid;
                        poll.outdoorData = pod;
                        polls[polls.length - 1] = poll;
                    }
                    else {
                        polls.push({ userCount: 1, indoorData: survey.indoorData, outdoorData: survey.outdoorData, createdOn: survey.createdOn });
                    }
                } else {
                    polls.push({ userCount: 1, indoorData: survey.indoorData, outdoorData: survey.outdoorData, createdOn: survey.createdOn });
                }
            })
            res.json(polls);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}

export {
    createSurvey,
    getPollResults,
    getUserSurveyResult,
    filterSurvey
}
