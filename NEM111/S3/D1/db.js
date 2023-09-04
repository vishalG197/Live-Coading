const mongoose=require('mongoose');
require("dotenv").config();
const connection=mongoose.connect(process.env.URL)
const userSchema=mongoose.Schema({name:"String",
email:"String",
password:"String"}
)
const UserModel = mongoose.model("data",userSchema);

module.exports={connection,UserModel}