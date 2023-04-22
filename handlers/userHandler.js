import User from "../models/User/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const tokenExpiry = "600s";
const refreshTokenExpiry = "30d";


////////////////////////////////////////////////////////User Token Verification/Refresh////////////////////////////////////////////////////////

const setTokens = (res, user) => {
    const token = jwt.sign({ user }, process.env.JWT_TOKEN, { expiresIn: tokenExpiry });
    const refreshToken = jwt.sign({ user }, process.env.JWT_REFRESH_TOKEN, { expiresIn: refreshTokenExpiry });
    res.cookie("token", token,
        {
            expires: new Date(Date.now() + (1000 * 600)),
            // httpOnly: true
        });
    res.cookie("refreshToken", refreshToken,
        {
            expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
            // httpOnly: true
        });
};

const verifyUser = (req, res) => {
    try {
        const user = jwt.verify(req.cookies.token, process.env.JWT_TOKEN);
        res.json(user);
    }
    catch { //verify refresh token then set access and refresh tokens again
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken)
            jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, decoded) => {
                if (err)
                    res.status(401).json({ message: "User Not Authorized" });
                const { user } = decoded;
                setTokens(res, user);
                res.json({ user });
            });
        else
            res.status(401).json({ message: "User Not Authorized" });
    }
};

////////////////////////////////////////////////////////User Login////////////////////////////////////////////////////////

const loginUser = (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    User.findOne({ email: userEmail }).then(user => {
        if (user) {
            if (bcrypt.compareSync(userPassword, user.password)) {
                setTokens(res, user);
                res.json({ user });
            }
            else
                res.status(401).json({ message: "Invalid Credentials" });
        }
        else {
            res.status(404).json({ message: "User does not exist" });
        }
    }).catch(err => res.status(500).json(err));
};

////////////////////////////////////////////////////////User Logout////////////////////////////////////////////////////////

const logoutUser = (req, res) => {
    res.clearCookie("token");
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Logged out succesfully" });
};

////////////////////////////////////////////////////////User Register////////////////////////////////////////////////////////

const registerUser = (req, res) => {

    const username = req.body.username;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const userAge = req.body.age;
    const userCountry = req.body.country;
    const userState = req.body.state;

    const newUser = new User({
        username: username,
        email: userEmail,
        password: userPassword,
        age: userAge,
        country: userCountry,
        state: userState
    });
    newUser.save().then((user) => {
        setTokens(res, user);
        res.json({ user });
    }).catch((err) => {
        res.status(400).json(err);
    });
};

////////////////////////////////////////////////////////Survey Check////////////////////////////////////////////////////////

const surveyCheck = (req, res, next) => {
    const userEmail = req.body.email;
    const country = req.body.country; //for TESTING
    const surveyCreatingOn = new Date().toLocaleDateString();
    User.findOne({ email: userEmail })
        .then(user => {
            if (user && (!user.lastSubmitted || user.lastSubmitted.toLocaleDateString() != surveyCreatingOn)) {
                {
                    if (country) //for TESTING
                        next();
                    else
                        res.json({ user });
                }
            }
            else
                res.status(400).json({ message: "User Not Allowed to submit Survey Again!" });
        })
}

export {
    registerUser,
    loginUser,
    logoutUser,
    verifyUser,
    surveyCheck
}