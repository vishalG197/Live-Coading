
const express =require('express');
const fs=require("fs")
const app =express();
app.use(express.json());
app.get('/', (req, res) => {
   res.send("welcome to Homepage of Express Server");
})
app.get('/', (req, res) => {
   const data =JSON.parse(fs.readFileSync("./data.json",'utf-8'));

   res.send(data);
})










app.listen(4000,()=>{
   console.log('Express server runnin at http://localhost:4000')
})