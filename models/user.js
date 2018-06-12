const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const config = require("../config/database");
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = mongoose.Schema({
    username:{
        type: String,
        //unique: true,
        trim: true,
        minLength: 1,
        required: true
    },
    name:{
        type: String,
       // unique: true,
        trim: true,
        minLength: 1,
        required: true
    },
    email:{
        type: String,
        //unique: true,
        trim: true,
        minLength: 1,
        required: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 4
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw (err);
        callback(null, isMatch);
    })
}

