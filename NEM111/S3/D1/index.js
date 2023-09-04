const express = require('express');
const {connection,UserModel} = require("./db")

const app = express();
app.use(express.json())
app.get('/', (req, res) => {
   res.setHeader('Content-Type', 'text/html');
   res.send("<h1>Welcome to my server</h1>");
})

app.post("/adduser",async(req,res)=>{
   const data =req.body;
   console.log(data)
   const user =new UserModel({...data})
   await user.save();
   console.log(data);
   res.send(data);
})

// app.patch("/updateuser/:user_id",async(req,res)=>{
//    try {
//       await UserModel.findByIdandUpdate({_id:req.params.id},req.body)
//    } catch (error) {
//       console.log(error);
//    }
// })
// app.delete("/updateuser/:user_id",async(req,res)=>{
//    try {
//       await UserModel.findByIdAndDelete({_id:req.params.id})
//    } catch (error) {
//       console.log(error);
//    }
// })
app.listen(3000,async()=>{
   try {
      await connection
      console.log("connected to the db")
      console.log("server is running at http://localhost:3000");
   } catch (error) {
      console.log(error)
   }
   
})