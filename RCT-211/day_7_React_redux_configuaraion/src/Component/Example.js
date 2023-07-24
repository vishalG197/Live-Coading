import React, { useState } from "react";
function Example(){
const [state,setState]=useState("");
const handleClick=()=>{
   console.log(state);
}
return <div>
<input type="text" onChange={(e)=>{
  setState(e .target.value);
}} />
<button onClick={handleClick}>add text</button>

   </div>
}