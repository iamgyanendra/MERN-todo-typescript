const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//cors
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
     res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.cookie('cookie2', 'value2', { sameSite: 'none', secure: true });

    next();
}
app.use(allowCrossDomain);

//Route imports
const todos = require("./routes/todoRoute");

app.use("/api/v1",todos);

module.exports = app