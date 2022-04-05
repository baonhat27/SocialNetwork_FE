import axios from "axios";
import {SERVER} from "../../../shared/store/env";

export async function handleSessionNameService(sessionId,name){
    const response=await axios.put(SERVER+"chat/session/"+sessionId,{
        name:name
    },{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
    return response.data;
}