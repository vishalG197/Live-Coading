const express = require('express');
const app = express();
const connection =require("./db");
const UserRouter = require('./router/userRouter');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(cookieParser());
app.use("/user",UserRouter)

app.get("/",(req,res)=>{
   res.send("Welcome to the server!!!!!!!!!")
})
app.get('/server', (req, res) => {
   // Verify JWT
   const token = req.cookies.token;
   console.log(token)
   if (!token) {
     return res.status(401).json({ error: 'Token missing' });
   }
   jwt.verify(token, "one", (err, decoded) => {
     if (err) {
       return res.status(401).json({ error: 'Invalid token' });
     }
     // Token is valid, proceed to protected route
     res.json({ message: 'Access granted to protected route' });
   });
 });
 app.post('/server', (req, res) => {
   res.cookie('token')
   res.clearCookie('refreshToken');
   res.json({ message: 'Logged out successfully' });
 });
 
app.listen(8080,async()=>{
   try {
      await connection;
      console.log("connected to db");
      console.log("server is running in the http://localhost:8080")
   } catch (error) {
      console.log(error)
   }
})