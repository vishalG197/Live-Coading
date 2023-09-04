const mongoose = require('mongoose');
const main=async()=>{ 
   try {
      const connection= await mongoose.connect(`mongodb://127.0.0.1:27017/NEM111`);
      console.log("connection succeed")
      //insert the document into the database;
await UserModel.insertMany([{name:"vish",age:24,city:"pune"},{name:"vishu",age:25,city:"latur"}])
const user=new UserModel([{name:"vishal giri",age:26,city:"pune"}])
await person.save();
      connection.disconnect();
      console.log('disconnected to the DB')
   } catch (error) {
      console.log("connection failed")
      // console.log(error);
   }


}
main();

//defining the structure
/*
1blueprints/structures
 */
const userSchema= mongoose.Schema({name:String,age:Number, city:String},{versionKey:false});

// model
const UserModel = mongoose.model("person",userSchema);

//addModule
function add(a,b){
   return a+ b;
}
module.exports = add;
//index.js
const add =required("./addModule")

let a=add(3,4);
console.log(a); //output:7
const fs=require("fs")
const express =require("express");
const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
   let data = fs.readFileSync("data.json", "utf8");
   res.status(200).json(data)
})
let port=3000;
app.listen(port,()=>{
   console.log("server is running on port")
})

module.exports =app;