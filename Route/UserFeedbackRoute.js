const express= require("express");
const route= express.Router();
const {sendData,getData,change,changeFeedback,DeleteData}=require("../controllers/FeedBack")
route.post("/sendFeedback",sendData)
route.get("/getdata",getData);
route.post("/selected",change);
route.put("/changeFeedback",changeFeedback);
route.post("/DeleteData",DeleteData);

module.exports=route