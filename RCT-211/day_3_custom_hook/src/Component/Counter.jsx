import { useTimer } from "../Hook/useTimer";
import {useCounterLogic }from "../Logics/useCounterLogic"
export default function Counter(){
   const [count,handleAdd]=useCounterLogic();
   const show=useTimer(5000)
   return <>
  {show&& <div><h1>counter={count}</h1>
   <button onClick={()=>handleAdd(3)}>ADD</button></div>}
   </>
}