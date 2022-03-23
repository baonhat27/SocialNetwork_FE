import axios from "axios"
import { SERVER } from "../store/env"

export function checkToken(){
    axios.get(SERVER+"v1/auth/refreshtoken",{
        headers:{
            Authenrization:localStorage.getItem("refreshToken")
        }
    })
    .then(response=>response.data)
    .then(token=>{
        localStorage.setItem("token",token.data.token);
        localStorage.setItem("refreshToken",token.data.refreshToken);
    })
    .catch(error=>{
        localStorage.clear();
        window.location="/login";
    })
        
}