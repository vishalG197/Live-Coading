 let crypto = require('crypto');
 
 console.log(process.argv)
 const operations = process.argv[2];
 const a=process.argv[3];
 const b=process.argv[4];
// console.log(__filename)
 switch(operations){
   case "add":{
      console.log(a+b);
   }
   case "sin" :{
      console.log(Math.sin(a))
   }
   case "random":{  
      let result = crypto.randomBytes(+a).toString("hex").slice(0,+a);
      console.log(result)
   } 
   default: "INVALID_OPERATION"
 }