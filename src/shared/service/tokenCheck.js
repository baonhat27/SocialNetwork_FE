import axios from "axios"
import { SERVER } from "../store/env"
import getUserInfo from "./getUserInfo";
export function checkToken(promise,dispatch){
    return promise.catch(error=>{
        if(error.response.status==401){
            axios.get(SERVER+"v1/auth/refreshtoken",{
                headers:{
                    Authorization:localStorage.getItem("refreshToken")
                }
            })
            .then(response=>response.data)
            .then(token=>{
                localStorage.setItem("token",token.data.token);
                localStorage.setItem("refreshToken",token.data.refreshToken);
                if(dispatch){
                    checkToken(getUserInfo(dispatch),dispatch);
                }
            })
            .catch(error=>{
                localStorage.clear();
                window.location="/login";
            })
        }
    })
}