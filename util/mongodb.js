 const mongoose = require("mongoose")
 const dotenv= require("dotenv")

dotenv.config();



const MongoConnection=async()=>{

    try{
         await mongoose.connect(process.env.MONGO_URI)

          console.log("MongoDb connected successfully");

    }catch(error){
     console.error(" Failed to connect to MongoDb",error.message);
     process.exit(1);
    }

 }

 module.exports = MongoConnection