import axios from "axios";
import localStorage from "redux-persist/es/storage";
import {SERVER} from "../../../shared/store/env/index";
export async function saveAvatar(imageLink){
    try{
        await axios.put(SERVER+'v1/users/handleAvatar',{
            avatar: imageLink[imageLink.length-1]
        },{
            headers:{
                Authorization:(await localStorage.getItem("token")).toString()
            }
        })
        return true;
    }
    catch(error){
        return false;
    }
}   