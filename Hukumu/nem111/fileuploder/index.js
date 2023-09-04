const express = require('express');
const app = express();
const multer = require('multer');

const path =require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,file.originalname)
  }
})

const upload = multer({ storage: storage })
app.get("/",(req,res)=>{
  res.status(200).send({ message: "welcome to server" })
})
app.post("/upload",upload.single('avatar'),(req,res,next)=>{
  res.status(200).send({
    message: "file uploaded successfully"
 })
})
// app.listen()
module.exports =app;