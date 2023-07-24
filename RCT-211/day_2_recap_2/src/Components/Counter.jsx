import React,{useState} from "react";
export const Counter=()=>{
const state=useState(0);
const count=state(0);
const setCount=state[1];
return <>
<h1>counter:{count}</h1>
<button onClick={()=>{
   setCount((pre)=>pre+1)
}}>Add</button>
</>
}