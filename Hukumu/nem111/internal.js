//process.nextTick()

console.log("Start of the program...")

process.nextTick(
()=>{
   setTimeout(()=>{
      console.log("Delayed for the 2 seconds...")
   },2000)
}
)

console.log("End of the program")

//process.hrtime()

const startTime = process.hrtime();
console.log(startTime)
const calculateSum = ()=>{
   let sum = 0;
   for (let i = 1; i <= 1000000; i++) {
     sum += i;
   }
   return sum;
}
const a=calculateSum();
console.log(a)

const endTime = process.hrtime(startTime);
console.log(endTime)
const executionTimeInNanoSeconds = endTime[0] * 1e9 + endTime[1];
console.log(`Sum calculated in ${executionTimeInNanoSeconds} nanoseconds.`);