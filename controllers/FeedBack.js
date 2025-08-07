const UserFeedBackModel = require("../Models/UserFeedBack.model");


const sendData=async(req,res)=>{
    console.log(req.body)
  const {name,serviceTag,email,company,Description,Rating}=req.body
  if( name === ""||email===""||Description===""||Rating==="")
    return res.status(404).send("Please fullfill the form");
  const existEmail = await UserFeedBackModel.findOne({email})

  if(existEmail)
    return res.status(400).send("Email is already Exists")
 const data = new UserFeedBackModel({
    name,
    email,
    Description,
    serviceTag,
    company,
    Rating
 })
 await data.save()
  return res.status(200).send({"message":"user is uploaded"})
}

const getData=async(req,res)=>{
    console.log("hello")
    const data =await  UserFeedBackModel.find()
    console.log(data)
    return res.status(200).json({"data":data})

}

const change= async(req,res)=>{
  const {flag,id} =req.body;
  try{

  if (flag === '0'){
   const  selected = true
   const data = await UserFeedBackModel.findById({_id:id});
   data.selected=selected;
   await data.save()
  }else{
    const selected =false
       const data = await UserFeedBackModel.findById({_id:id});
   data.selected=selected;
   await data.save();
  }

  return res.status(200).send({"message":"user is updated"})
  }catch(error){
   return res.status(404).send({"message":"something is wronged"})
  }

}
const changeFeedback=async(req,res)=>{
  const {name,serviceTag,email,company,selected,Description,Rating,createdAt,id}= req.body;
  console.log(req.body)
  try{

       const exists= await UserFeedBackModel.findById(id)
       console.log(exists)
   if(!exists){
    return res.status(404).send({message:"User Is not found"})
   }
  exists.name = name
   exists.serviceTag=serviceTag
   exists.email=email
   exists.company= company
   exists.Description=Description
   exists.Rating=Rating

      if (selected !== undefined) {
      exists.selected = selected === "true" || selected === true; // handles string/boolean
    }

    if (createdAt) {
      exists.createdAt = new Date(createdAt); // ensure it's a valid Date
    }

   await exists.save()
   console.log(exists)
    return res.status(200).send({"message":"user is updated"})
  }catch(error){
  return res.status(404).send({"message":"user updation failed"})
}


}
const DeleteData=async(req,res)=>{
  const {id} =req.body
try{
  await UserFeedBackModel.findByIdAndDelete({_id:id});
  return res.status(200).send({"message":"user is deleted"})
}catch(error){
  return res.status(404).send({"message":"server error"})
}
}
module.exports = {sendData,getData,change,DeleteData,changeFeedback}