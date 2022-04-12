import axios from "axios";
import {SERVER} from "../../../shared/store/env";

export async function handleSessionNameService(sessionId,name){
    try{
        const response=await axios.put(SERVER+"chat/session/"+sessionId,{
            name:name
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        return response.data;
    }
    catch(error){
        return [];
    }
}
export async function deleteMessageService(messageId){
    try{
        const response= await axios.put(SERVER+"chat/message/"+messageId,{
            
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        return true;
    }
    catch(error){
        return false
    }
}