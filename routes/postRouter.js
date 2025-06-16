const express = require('express');
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const postModel = require("../models/post-model");
const userModel = require("../models/user-model");
const upload = require("../config/multerConfig");

router.post("/upload", isLoggedIn, upload.single("image"), async function(req,res){
  try {
  let { postdata } = req.body;
  
    let user = await userModel.findOne({
      email:req.user.email,
    })
  
  if(!user) return res.redirect("/profile");
  
  let post = await postModel.create({
    image:req.file.filename,
    postdata,
    user:user._id,
  });
  
user.post.push(post._id);
await user.save();
  


req.flash("success","Your creation is Added!")

return res.redirect("/profile")
} catch(err) {
  console.log(err.message)
}

});


module.exports = router;