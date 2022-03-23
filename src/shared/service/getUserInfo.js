import axios from "axios"
import { SERVER } from "../store/env"
import { checkToken } from "./tokenCheck";
import {addUserInfomation} from "../store/redux/actions";
export default function getUserInfo(dispatch){
    axios.get(SERVER+'v1/users/userInfo',{
        headers:{
          Authorization:localStorage.getItem("token")
        }
      })
      .then((userInfo)=>userInfo.data)
      .then((userInfo)=>{
        dispatch( addUserInfomation(userInfo.data));
      })
      .catch((error)=>{
        if(error.response.status==401){
          checkToken();
        }
        else{
          alert('có lỗi xảy ra, xin vui lòng thử lại');
        }
      })
}