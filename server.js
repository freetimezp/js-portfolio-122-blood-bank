const express = require("express");

const app = express();

//routes
app.use("/api/v1/test", require("./routes/testRoutes"));

const PORT = 8080;

app.listen(PORT, () => {
    console.log("server run 8080");
});













