const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
    res.send("REGISTER");
});

router.get("/Authentication", (req, res) => {
    res.send("AUTH");
});

router.get("/profile", (req, res) => {
    res.send("PROFILE");
});

router.get("/validate", (req, res) => {
    res.send("VALIDATE");
});

module.exports = router;



