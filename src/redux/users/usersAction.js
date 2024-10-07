import { jsAxios } from "../../axios/jsAxios"
import {  RECEIVE_USER_ERROR, RECEIVE_USER_RESPONSE, SEND_USER_REQUEST } from "./usersType"

export const sendUserRequest=()=>{
    return{
        type:SEND_USER_REQUEST,
    }
}

export const receiveUserResponse=(data)=>{
    return{
        type:RECEIVE_USER_RESPONSE,
        payload:data
    }
}

export const receiveUserError=(error)=>{
    return{
        type:RECEIVE_USER_ERROR,
        payload:error,
    }
}

export const getUsers=()=>{
   return(dispatch)=>{
    dispatch(sendUserRequest())
    jsAxios.get(`/users`).then(res=>{
        dispatch(receiveUserResponse(res.data))
    }).catch(error=>{
        dispatch(receiveUserError(error.message))
    })
   }
}
