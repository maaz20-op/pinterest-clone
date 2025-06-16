var express = require('express');
var router = express.Router();
const userModel = require("../models/user-model");
const postModel = require("../models/post-model");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/delete",async function(req,res){
  const user = await userModel.deleteMany({});
  const post = await postModel.deleteMany({});
  
  res.send({post,user})
});
router.get("/read",async function(req,res){
  const post = await postModel.find()
  res.send(post)
});

router.get('/', function(req, res) {
  res.render("register")
});

router.get("/profile",isLoggedIn, async function(req,res){
let user = await userModel.findOne({email:req.user.email}).populate("post");
  console.log(user)
  res.render("profile",{user})
});

router.get("/feed", isLoggedIn,function(req,res){
  res.render("feed")
});






module.exports = router;
