import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Blood Bank App",
    });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log("server run 8080");
});













