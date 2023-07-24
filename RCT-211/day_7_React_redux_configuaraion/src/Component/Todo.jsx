
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoFailureAction, todoRequestAction, getTodoSuccessAction } from "../Redux/action";

export default function Todo(){
   const todos=useSelector((store)=>store.todo);
   const dispatch=useDispatch();

const getTodo=()=>{
dispatch(todoRequestAction())
   axios.get("http://localhost:8080").then((res)=>{
      dispatch(getTodoSuccessAction())
   }).catch((err)=>{
      dispatch(todoFailureAction())
      console.log(err)
   })
}

   return <fieldset>
<div>
<TodoInput/>
</div>
<div>

</div>
   </fieldset>
}