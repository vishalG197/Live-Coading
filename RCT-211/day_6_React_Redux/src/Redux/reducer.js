import { ADD, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, REDUCE } from "./actionType";
const initialState={
   counter:0,
   todo:[],
   isLoading:false,
   isError:false
}
export const reducer=(state=initialState,{type,payload})=>{
switch (type){
   case ADD:{
      return {...state,counter:state.counter+payload}
   }
   case REDUCE:{
      return {
         ...state,counter:state.counter-payload
      }
   }
   case GET_TODO_REQUEST:{
      return {...state,isloading:true}
   }
   case GET_TODO_SUCCESS:{
      return {...state,isloading:false,todo:payload}
   }
   case GET_TODO_FAILURE:{
      return {...state,isloading:false,isError:true}
   }
   default:{
      return state;
   }
}
}