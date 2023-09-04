const http = require('http');
const fs =require('fs');
const server =http.createServer((req, res)=>{
if(req.url==="/"){
   res.setHeader('Content-Type', 'text/html');
res.end('<h1>this is my home page</h1>');
}else if(req.url==='/data'){
res.end("User Data....")
}else if(req.url=="/report"){
   res.end("User Report this changes......");
}else if(req.url=="/users"){

// fs.readFile('./data.json','utf-8',(err,data)=>{
//    if(err) res.end(err);
//    else res.end(data);
// })
let data =fs.createReadStream('./data.json','utf-8');
data.pipe(res);
   
}else if(req.url==="./adddata" && req.method=="POST"){
   let str='';
   req.on('data',(chunk)=>{
str+=chunk;
   })
   req.on('end',()=>{
 console.log(str);
   })
res.end('this is post request')

}else{
   res.end('invalid endpoint request \n 404 not found')
}

});

server.listen(8080, function(){console.log('server is running at 8080')})