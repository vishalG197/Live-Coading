// validateTodoData.js
const fs = require('fs');
function validateTodoData(req, res, next) {
  // type body{
  //     ID: number
  //     Name: string
  //     Rating: number
  //     Description: string
  //     Genre: string
  //     Cast: string[]
  //     }
  
 let data;
 try{
data =req.body;
if(data==="string"){
  JSON.parse(data)
}
 }catch(error){
  res.status(400).send("invalid request body.")
 }
console.log(data)
const {ID,Name,Rating,Description,Genre,Cast}=data;
if(ID==undefined||Name==undefined||Rating==undefined||Description==undefined||Genre==undefined||Cast==undefined){
  res.status(400).send("invalid request body.")
}
  if (typeof ID === 'number') {
    fs.appendFileSync('res.txt', 'ID is a number\n');
  } else {
    fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
    res.status(400).send("bad request.some data is incorrect.");
  }
  
  if (typeof Name === 'string' && !/\d/.test(Name)) {
    fs.appendFileSync('res.txt', 'Name is a string\n');
  } else {
    fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
    res.status(400).send("bad request.some data is incorrect.");
  }
  
  if (typeof Description === 'string') {
    fs.appendFileSync('res.txt', 'Description is a string\n');
  } else {
    fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
    res.status(400).send("bad request.some data is incorrect.");
  }
  
  if (typeof Rating === 'number') {
    fs.appendFileSync('res.txt', 'Rating is a number\n');
  } else {
    fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
    res.status(400).send("bad request.some data is incorrect.");
  }
  
  if (typeof Genre === 'string') {
    fs.appendFileSync('res.txt', 'Genre is a string\n');
  } else {
    fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
    res.status(400).send("bad request.some data is incorrect.");
  }
  
  if (Array.isArray(Cast) && Cast.every((item) => typeof item === 'string')) {
    fs.appendFileSync('res.txt', 'Cast is an array of strings\n');
  } else {
    fs.appendFileSync('res.txt', 'bad request.some data is incorrect.\n');
    res.status(400).send("bad request.some data is incorrect.");
  }
  
  
   next();
 }
 
 module.exports = validateTodoData;
 