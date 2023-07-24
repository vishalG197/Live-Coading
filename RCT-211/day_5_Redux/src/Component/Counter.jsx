import React, { useState } from "react";
import { store } from "../Redux/store";
import { AddHandler, ReduceHandler } from "../Redux/action";

export default function Counter(){
   const[forcerender,setForcerender]=useState(2323232)
let data=store;
console.log(data);
const {dispatch,getState,subscribe}=store;
console.log(getState())

subscribe(()=>{
setForcerender(getState().counter)
})

const Add=()=>{
   dispatch(AddHandler(1))
}
const Reduce=()=>{
   dispatch(ReduceHandler(1))
}
   return <div>
      <fieldset>
        <h1>counter:{getState().counter}</h1>
        <button onClick={Add}>Add</button>
        <button onClick={Reduce}>Reduce</button>
      </fieldset>
   </div>
}