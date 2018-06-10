const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");

router.post("/register", (req, res, next) => {
    var newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password 
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, message: "Failed to register the user"});
        }else{
            res.json({success: true, message: "You have successfully registered"});
        }
    });
});

router.get("/Authentication", (req, res) => {
    res.send("AUTH");
});

router.get("/profile", (req, res) => {
    res.send("PROFILE");
});


module.exports = router;



