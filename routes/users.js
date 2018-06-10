const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");
const config = require("../config/database");

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

router.post("/authenticate", (req, res, next) => {
   const username = req.body.username;
   const password = req.body.password;
   
   User.getUserByUsername(username, (err, user) => {
       if(err) throw err;
       if(!user){
           return res.json({success: false, msg: "User not found"});
       }

       User.comparePassword(password, user.password, (err, isMatch) => {
           if(err) throw err;
           if(isMatch){
               const token = jwt.sign(user.toJSON(), config.secret, {
                   expiresIn: 604800
               });

               res.json({
                   success: true,
                   token: "JWT " + token,
                   user: {
                       id: user._id,
                       username: user.username,
                       name: user.name,
                       email: user.email
                   }
               })
           }else{
               return res.json({success: false, msg: "Invalid username or password"});
           }
       })
   })

});

router.get("/profile", passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});


module.exports = router;



