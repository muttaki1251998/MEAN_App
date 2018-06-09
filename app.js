const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const config = require("./config/database");

// database connection
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log("Connected to mongodb database");
});

mongoose.connection.on('err', (err) => {
    console.log("Failed to connect to mongodb database");
});

// Init
var app = express();

var users = require("./routes/users");
var index = require("./routes/index");

// Set up routes
app.use("/", index);
app.use("/users", users);

// body-parser mw
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

var port = 8000;
app.listen(port, () => {
    console.log("Server started on port " + port);
});