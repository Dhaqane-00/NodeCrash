const express = require("express");
const app = express();
const Mongoose = require("mongoose");

const {User} = require("./src/routers/User");


app.use(express.json());


// Connect to MongoDB

// Mongoose.connect("",)
// .then(()=>console.log("Connected to MongoDB"))
// .catch((err)=>console.error("Connection error:", err));


app.use("/Api",User);

app.listen(300, ()=>{
    console.log("Server is running on port 3000");
})