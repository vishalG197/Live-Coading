import React, { useState } from "react";
import { AddAction, ReduceAction } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
export default function Counter(){
const counter =useSelector(store=>store.counter);
const dispatch=useDispatch();
const Add=()=>{
   dispatch(AddAction(1))
}
const Reduce=()=>{
   dispatch(ReduceAction(1))
}
   return <div>
      <fieldset>
        <h1>counter:{counter}</h1>
        <button onClick={Add}>Add</button>
        <button onClick={Reduce}>Reduce</button>
      </fieldset>
   </div>
}