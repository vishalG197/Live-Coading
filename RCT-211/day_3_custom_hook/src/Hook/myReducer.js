import { useState } from "react"


export const useMyReducer=(reducer,initialState)=>{
   const [state,setState]=useState(initialState);
   const dispatchMethod=(action)=>{
      
      const newstate= reducer(state,action);
      setState(newstate);

      return [state,dispatchMethod];
     
   
   
   }
}