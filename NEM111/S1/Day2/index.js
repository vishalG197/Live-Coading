// import Os 
// by default node soes not support ESM
// const os =require("os");
// console.log(os.cpus()[0]);
// const operation = require("./mode");
// operation.add(12,23)
// operation.subtract(23,12);
// operation.pro(12,23);
// operation.div(20,4);

// const even =require('is-even');
// console.log(even(12))

const fs=require('fs');

// try {
//    const data =fs.readFileSync('./files.txt',{encoding:'utf-8'});
//    console.log(data)
// } catch (err) {
//    console.log(err)
// }

// console.log('gud bye');
// // console.log(fs)
fs.appendFile('./write.txt',"\n this is my 2 write file",(err)=>{
   if(err) throw err;
   else console.log("written")
});