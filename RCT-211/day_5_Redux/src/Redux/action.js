import { ADD, REDUCE } from "./actionType"
import { Dispatch } from "react"

export const AddHandler=(payload)=>{
  return {type:ADD,payload}
}
export const ReduceHandler=(payload)=>{
   return {type:REDUCE,payload}
}