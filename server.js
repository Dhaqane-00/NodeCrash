const express = require("express");
const app = express();
const Mongoose = require("mongoose");
const PORT=3000;

const User = require("./src/routers/User");


app.use(express.json());


// Connect to MongoDB ser
Mongoose.connect("mongodb://localhost:27017/NodeCrash")
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});



app.use("/Api",User);
//Access Endpiont
//LocalHost:300/Api/Users/CreateUser   Like this

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}` );
})