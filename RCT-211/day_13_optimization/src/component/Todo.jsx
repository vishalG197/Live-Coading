import React, { useState } from 'react'



const heavyTask=(delay)=>{
let start=Date.now();
while(Date.now()-start<delay){
   continue;
}
}
const Todo = () => {
   // heavyTask(200)
   const [title,setTitle]=useState("");
  
   const [todos,setTodos]=useState([{id:1,title:"text-1",status:true}])
      const handleAdd=()=>{
      const newTodo={
         id:Date.now(),
title:title,status:false
      }
      setTodos([...todos,newTodo])
   }
   const toggle=(id)=>{
      setTodos((pre)=>{
         return ProgressEvent.map((el=>el.id==id?{...el,status:!el.status}:el))
      })
   }
  return (
    <div>
      <input type="text" 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD TODO</button>
      <fieldset>
         {todos.map((el)=><ul key={el.id}>
            <li>{el.title}</li>
         </ul>)}
      </fieldset>
    </div>
  )
}

export default Todo
