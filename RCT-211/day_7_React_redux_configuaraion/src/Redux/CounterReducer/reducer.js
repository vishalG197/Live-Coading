import { ADD, REDUCE } from "../actionType";
const initialState={
   counter:0,
  
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
   
   default:{
      return state;
   }
}
}