import {  TODO_FAILURE, TODO_REQUEST, TODO_FAILURE, POST_TODO_SUCCESS, GET_TODO_SUCCESS } from "./actionType"

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