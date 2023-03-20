const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
app.get('/',(req,res)=>{
     res.send("server is on")
})
// connect to db
// mongoose.Promise = global.Promise


var mydb;
var uri = process.env.MONGODB_URL;
var promise = mongooose.connect(uri,{
      useMongoClient: true,
});
promise.openUri(uri,function(errr,db){
if(errr){
        throw errr;
      }else{
        console.log("Connection Successfull");      
        mydb = db;
        console.log(mydb)
      }
});

// Import routes
const userdataRoutes = require("./routes/userdata");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/userdatas", userdataRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
