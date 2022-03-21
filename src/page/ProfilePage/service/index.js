import axios from "axios";
import { SERVER } from "../../../shared/store/env";
export async function loadData(){
    try{
        const api=await axios.get(SERVER+'v1/users/userInfo',{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        return api.data;
    }
    catch(error){
        return false
    }
}
export async function getUserById(id){
    try{
        const friend=await axios.get(SERVER+'v1/users/'+id);
        return friend.data
    }
    catch(error){
        return false
    }
}