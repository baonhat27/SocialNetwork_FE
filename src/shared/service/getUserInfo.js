import axios from "axios"
import { SERVER } from "../store/env"
import {addUserInfomation} from "../store/redux/actions";
export default function getUserInfo(dispatch){
    return axios.get(SERVER+'v1/users/userInfo',{
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      .then((userInfo)=>userInfo.data)
      .then((userInfo)=>{
        dispatch( addUserInfomation(userInfo.data));
      })
}