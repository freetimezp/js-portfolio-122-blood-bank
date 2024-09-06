const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`MongoDB connection success`.bgGreen.white);
    } catch (error) {
        console.log(`MongoDB connection error: ${error.message}`.bgRed.white);
    }
};

module.exports = connectDB;



