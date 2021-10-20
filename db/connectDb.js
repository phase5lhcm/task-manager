import mongoose from 'mongoose';

// By using a function instead of only mongoose.connect
// we allow the function to be exported to server.js
// where we will only spin up the server if the connection to db is successful
const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

export default connectDb;
