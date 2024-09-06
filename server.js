const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

const dotenv = require("dotenv");
dotenv.config();

//mongodb connection
connectDB();

//express
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use("/api/v1/test", require("./routes/testRoutes"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Node Server in ${process.env.DEV_MODE} Mode and running on Port: ${process.env.PORT}`.bgBlue.white);
});













