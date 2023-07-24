import { ADD,  REDUCE, } from "./actiontype"

export const AddAction=(payload)=>{
  return {type:ADD,payload}
}
export const ReduceAction=(payload)=>{
   return {type:REDUCE,payload}
}
