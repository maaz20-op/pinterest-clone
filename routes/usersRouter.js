const express = require("express");
const router = express.Router();
const { signupUser } = require("../controllers/authController")
const { loginUser } = require("../controllers/authController")
const { logoutUser } = require("../controllers/authController")



router.post("/register",signupUser)

router.post("/login",loginUser)

router.get("/logout",logoutUser)

module.exports = router;




