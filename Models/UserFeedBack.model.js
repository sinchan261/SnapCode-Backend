 const mongoose = require("mongoose")
const { boolean } = require("webidl-conversions")

 const UserFeedback = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
serviceTag:{
    type:String,
     minlength: 6,
    maxlength: 6, 
},
email:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
    match:[
         /^\S+@\S+\.\S+$/,
      "Please enter a valid email address",
    ],
},
company:{
    type:String,
},
Description:{
    type:String,
    required:true,
},
Rating:{
    type:String,
    required:true,
},
createdAt:{
    type :Date,
    default:Date.now,
}
,selected:{
    type:Boolean,
    default:false,
}

 })
 module.exports= mongoose.model("userFeedback",UserFeedback)