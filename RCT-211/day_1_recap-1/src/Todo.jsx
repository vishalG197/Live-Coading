import { useEffect ,useState} from "react"

function Todo (){
const [todos,setTodos]=useState([]);
  useEffect(()=>{
   //  fetch(`https://jsonplaceholder.typicode.com/todos`).
   //  then((res)=>{
   //    res=res.json();
   //  }).then((data)=>{
   //    console.log(data)
   //    setTodos(data)
   //  }).catch((err)=>{
   //    console.log(err)
   //  })
   axios.get(`https://jsonplaceholder.typicode.com/todos`).then()
  },[])


  return <>
  
  {/* {todos.map((el)=>{
    return <ul>
      <li>{el.title}</li>
      <li>{el.complets?"completed":"not Completed"}</li>
    </ul>
  })} */}
  </>
}
export default Todo;