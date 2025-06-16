const mongoose = require("mongoose");

  const userSchema = new mongoose.Schema({
  username: String,
  fullname:String,
  dp:{
    type:String,
    default: "https://iili.io/FCf1n3X.png"
  },
  email: String,
  password: String,
  post:[
    { 
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post",
  }
  ],
});



module.exports = mongoose.model("User",userSchema);
