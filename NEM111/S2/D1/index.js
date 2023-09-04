const express = require('express');
const fs = require('fs');
const app =express();
const {timelogger}=require('./middleware/timeLogger');
app.use(timelogger())
app.get('/',(req,res)=>{
   console.log("welcome page")
   res.send("Welcome")
})
app.get('/data',(req,res)=>{
let data =fs.readFileSync("data.jsom",(err,data)=>{
// console.log(data);
res.end(data)
})

})
app.get('/contact',(req,res)=>{
   console.log("Contact page")
   res.send("Contact Page")
})
app.get('/about',(req,res)=>{
   console.log("About page")
   res.send("About Page")
})
app.get('/blog',(req,res)=>{
   console.log("blog page");
   res.send("Blog Page")
})
app.listen(4500,()=>{
   console.log('server running on http://localhost:4500');
})