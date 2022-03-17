import axios from "axios";
import { SERVER } from "../../../shared/store/env";
export async function hanldeUserInfomation(u){
    try{
        await axios.put(SERVER+'v1/users',u,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        alert('Thay đổi thông tin thành công');
        return true;
    }
    catch(error){
        alert('Thay đổi thông tin thất bại');
        return false;
    }
}
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