import React,{useReducer, useState} from "react";
const data=0;
// const initialCount=()=>{
//    return 24;

// }

export const Counter=()=>{
   // console.log(initialCount);
   // const [count,setCount]=useSTate(()=>{
   //    if(param==="even"){
   //       return 0;
   //    }else if (param==="odd"){
   //       return 1;
   //    }
   // });
const reducer=({action,state})=>{
switch(action.type){
   case "INCRESE" :{
      return state;
   }
   case "DECRESE" :{
      return state;
   }
   case "RESET" :{
      return state;
   }
}
}
const [state,dispatch]=useReducer(reducer,initialValue);

   return (<div>
<h1>counter={count}</h1>

   </div>)
}