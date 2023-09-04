const fs = require("fs");

let num =process.argv[2];
console.log(typeof num);
// console.log(argv)
// complete the following fubctions
isNumber(num);
isStr(num)
isArray(num)
isObj(num)
function isNumber(num) {
if( typeof(num) === "number"){
console.log('it is a Number.')
fs.writeFileSync('test.txt', `it is a Number.\n`);
}else{
   console.log('it is Not a Number.')
   fs.writeFileSync('test.txt', `it is Not a Number.\n`);
}
}
// isStr('10')
function isStr(str) {
  console.log(typeof(+str)) 
   if(   typeof str === "string"){
      console.log('it is a String.')
      fs.writeFileSync('test.txt', `it is a String.\n`);
      }else{
         console.log('it is Not a String.')
         fs.writeFileSync('test.txt', `it is Not a String.\n`);
      }
}

function isArray(arr) {
   if( Array.isArray(arr)){
      console.log('it is a Array.')
      fs.writeFileSync('test.txt', `it is a Array.\n`);
      }else{
         console.log('it is Not a Array.')
         fs.writeFileSync('test.txt', `it is Not a Array.\n`);
      }
}

function isObj(obj) {
   if( typeof(obj) === "object"&&obj !== null && !Array.isArray(obj)){
      console.log('this is a object.')
      fs.writeFileSync('test.txt', `this is a object.\n`);
      }else{
         console.log('this is not a object.')
         fs.writeFileSync('test.txt', `this is not a object.\n`);
      }
}

function cls() {
   try {
      fs.unlinkSync('test.txt');
     
    } catch (err) {
      // console.error('Error while deleting test.txt:', err);
    }
}

// // Export All the functions
// module.exports = { isNumber, isStr, isArray, isObj, cls };
