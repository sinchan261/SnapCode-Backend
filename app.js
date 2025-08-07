 const express = require("express")
const app = express();
const dotenv = require("dotenv");
const InitDb= require("./db/DatabaseConnection")
const bodyParser = require('body-parser')
const cors = require("cors");
app.use(bodyParser.json()); // Parse JSON
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors({
  origin: "http://localhost:8080"||"https://dynamic-spark-studio.vercel.app/", // Allow only frontend on port 8000
  credentials: true               // Optional: if you're using cookies or authentication
}));
   dotenv.config()
   InitDb()
const sendRoute = require("./Route/UserFeedbackRoute")
 app.get("/",(req,res)=>{
     res.send("welcome to our website")
 })
 app.use("/send",sendRoute)


app.listen(2000,()=>{
    console.log("server is start");
})