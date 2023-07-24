import { useRef } from "react"


export default function Throttle(){
const handleClick=()=>{
   console.log("making the network request")
}
let {current:wait}=useRef(false);
let count=0;
const throttle=(fun,delay)=>{
   console.log(count++);
if(wait){
   return;
}
fun();
wait=true;
setTimeout(()=>{
   wait=false;
},delay)
}


   return (
      <div>
         <button onClick={()=>throttle(handleClick,2000)}>ClickMe</button>
      </div>
   )
}