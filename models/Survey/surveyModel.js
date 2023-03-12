import db from "../dbConnection.js";

const surveySchema = new db.Schema({
    createdOn: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    indoorData: {
        type: Map,
        required: true
    },
    outdoorData: {
        type: Map,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

surveySchema.index({ createdOn: 1, age: 1, country: 1, state: 1 });
surveySchema.index({ email: 1 });

const Survey = new db.model("Survey", surveySchema);

export default Survey;
