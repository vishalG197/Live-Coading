import React
 from "react";
import { useRef } from "react";
import { useState } from "react";

 export const PinTab=({length,maxChar})=>{
   const inputRef=useRef();
const  [pinlength]=useState(new Array(length).fill(""));
return <div>
   {pinlength.map((el,i)=><input type="number" key={i} 
   style={{width:"50px",height:"50px",margin:"10px"}}
   maxLength={maxChar} ref={
      (e)=>{
         inputRef.current[i]=e
      }}/>)}
</div>

 }