import { useState } from "react";

export const useCounterLogic=()=>{
   const [count,setCount]=useState(0);
   const handleAdd=(payload)=>{
      setCount((prev)=>prev+payload)
   }

   return [count,handleAdd]
}