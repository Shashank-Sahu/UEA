import mongoose, { connect } from "mongoose";
mongoose.set('debug', true);
// mongoose.set('autoIndex', false);
connect("mongodb+srv://shashank-sahu:" + process.env.DBPASS + "@opencluster.iz8gblr.mongodb.net/uea", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// connect("mongodb://localhost:27017/uea");

export default mongoose;