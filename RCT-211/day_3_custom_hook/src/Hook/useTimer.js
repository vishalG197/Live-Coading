import { useEffect, useState } from "react";

export function useTimer(delay){
   const [show,setShow]=useState(false);
useEffect(()=>{
setTimeout(()=>{
   setShow(true)
},delay)
},[])
return show;
}