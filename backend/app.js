const express = require("express");
const app = express();

app.use(express.json());

//Route imports
const todos = require("./routes/todoRoute");

app.use("/api/v1",todos);

module.exports = app