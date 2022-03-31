import axios from "axios";
import { SERVER } from "../../../shared/store/env";

export async function searchUserService(keyword){
    try{
        const listUser=await axios.get(SERVER+"v1/search?user=1&post=0&comment=0&keyword="+keyword,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        return listUser;
    }
    catch(error){
        return []
    }
}
export async function getListSession(){
    try{
        const listSession=await axios.get(SERVER+"chat/session",{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        });
        return listSession;
    }
    catch(error){
        return []
    }
}
export async function joinTheSession(friendId,myId){
    try{
        const session=await axios.post(SERVER+"chat/session",{
            friendId:friendId,
            myId:myId
        },{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        return session;
    }
    catch(error){
        return null;
    }
}