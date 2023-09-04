

const timelogger =(req,res,next)=>{
   const start =new Date().getTime();
console.log("hellow from middleware");
next();// this next will take the compiler to the thing which has to be executed next
// is going to take the compiler to next thig in execution stack
const end =new Date().getTime();
console.log(end-start);
}
module.export ={timelogger}