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

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const userdataRoutes = require("./routes/userdata");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/userdatas", userdataRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
