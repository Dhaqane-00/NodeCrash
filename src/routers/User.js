const expres = require("express")
const User = expres.Router();
const {register,login,getUsers} = require("../controllers/user");

User.post("/CreateUser",register)
User.post("/login", login);
User.get("/GEtAll Users", getUsers);


module.exports = User;



