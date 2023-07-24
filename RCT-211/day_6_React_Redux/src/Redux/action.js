import { ADD, TODO_FAILURE, GET_TODO_REQUEST, TODO_SUCCESS, REDUCE, GET_TODO_SUCCESS } from "./actionType"

export const AddAction=(payload)=>{
  return {type:ADD,payload}
}
export const ReduceAction=(payload)=>{
   return {type:REDUCE,payload}
}

export const gettodoSuccessAction =(payload)=>{
return {type:GET_TODO_SUCCESS,payload}
}
export const todoRequestAction =(payload)=>{
  return {type:TODO_REQUEST}
  }
  export const postTodoSuccessAction =(payload)=>{
    return {type:POST_TODO_SUCCESS,payload}
    }
  export const getTodoFailureAction =()=>{
    return {type:TODO_FAILURE}
    }