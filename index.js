const express = require("express");
const app = express();

const PORT = process.env.port || 8080;

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("/health", (req, res) => {
    res.status(200).send(`Healthy on ${new Date()}`);
});

app.listen(PORT, () => {
    console.log("Changed by Joel Lord");
    console.log(`Server started on port ${PORT}`);
});
