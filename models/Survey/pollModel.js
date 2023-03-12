import db from "../dbConnection.js";

const pollSchema = new db.Schema({
    createdOn: {
        type: Date,
        required: true
    },
    userCount: {
        type: Number,
        required: true
    },
    indoorData: {
        type: Map,
        required: true
    },
    outdoorData: {
        type: Map,
        required: true
    }
});

pollSchema.index({ createdOn: 1 });

const Poll = new db.model("Poll", pollSchema);

export default Poll;
