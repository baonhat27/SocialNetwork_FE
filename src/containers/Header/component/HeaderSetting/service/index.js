import axios from "axios";
import {SERVER} from "../../../../../shared/store/env";
export function logoutService(){
    axios.get(SERVER+"v1/auth/logout",{
        headers:{
            Authorization:localStorage.getItem("refreshToken")
        }
    })
    .then(response=>{
        localStorage.clear();
        window.location="/login"
    })
}