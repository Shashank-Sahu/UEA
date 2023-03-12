import db from "../dbConnection.js";
import bcrypt from 'bcrypt';
const userSchema = new db.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 13,
        max: 130
    },
    lastSubmitted: {
        type: Date
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

const User = new db.model("User", userSchema);

export default User;
