const express = require('express');
const fs= require('fs');
const app = express();

app.get('/', (req, res) => {

   res.send("welcome home")
})
//dynamic response using query
app.get('/search', (req, res) => {
console.log(req.query)
const {movie}=req.query;
if(movie===undefined) {
   res.send('please serch for movies')}else{
//serch data in database and send the data to the server
      res.send(`serching......${movie}`)
   }
  
})
app.get('/stucdents/:roll_num', function(req, res){
const param=res.params;
const roll_num = parseInt(param.roll_num);
res.send(`this is a data of students ${roll_num}`)
})

// apin to give the temp data
app.get('/temp',(req, res)=>{
   console.log(res.query)
   const {city} = req.query;
   const {cities}=JSON.parse("data.json","utf-8");
   console.log(cities);
   const temp = cities[city]
   console.log(temp,cities,city);
   if(city){
      res.send(`temp of the city ${city} is ${temp}`);
   }else{
      res.send(` temp of the city ${city} is not preasent in db`);
   }
//    if(city){
// let data= JSON.parse(fs.readFileSync('data.json',(err,data)=>{
//    if(err){
//       res.send(err)
//    }else{
//      let temp = data.filter((el)=>{
//          el==city
//       })
//       res.send(`${city} have temp ${temp}`)
//    }
// }))
   // }else{
   //    res.send("serch accoding city by providing the city name in query")
   // }
})
// app.post('/',(res,req)=>{
//    console.log(req.body)
   
//    res.send("data added")
// })











app.listen(8080,()=>{
   console.log('server is running at http://localhost:8080');
})