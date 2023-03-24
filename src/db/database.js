import mongoose from "mongoose";

const { MONGO_URI } = process.env;

function connect() {
    mongoose
        .connect(MONGO_URI)
        .then(() => {
            console.log("Successfully connected to the database");
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.log(error);
            process.exit(1);
        });
}

export default connect;
