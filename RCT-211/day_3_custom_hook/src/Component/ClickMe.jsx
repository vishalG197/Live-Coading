import { useDebounce } from "../Hook/useDebounce";


export default function ClickMe (){
const debounce=useDebounce();
const handleClick=()=>{
   console.log("request to be made")
}
   return <div>
      <button onClick={debounce(handleClick,2000)}>click ME</button>
   </div>
}