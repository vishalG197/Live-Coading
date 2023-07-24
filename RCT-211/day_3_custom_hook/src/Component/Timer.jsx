import { useEffect, useState } from "react";
import { useTimer } from "../Hook/useTimer";
import { useCounterLogic } from "../Logics/useCounterLogic";


export default function Timer(){
const show=useTimer(4000);
const ma=useTimer(2);
const[count,handleAdd]=useCounterLogic()
return <>
{show&&<h1>custom Timer</h1>}
<button onClick={()=>handleAdd(10)}>add</button>
{ma&&<h1>custom Timer{count}</h1>}
</>



}