import Home from "./Home";
import React,{useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import getUserInfo from "../../shared/service/getUserInfo";
import { checkToken } from "../../shared/service/tokenCheck";
const HomePage = ({children}) => {
  const dispatch=useDispatch();
  useEffect(()=>{
<<<<<<< HEAD
    axios.get(SERVER+'v1/users/userInfo',{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    .then((userInfo)=>userInfo.data)
    .then((userInfo)=>{
      dispatch( addUserInfomation(userInfo.data));
      // localStorage.setItem("userId",userInfo.data._id)
    })
    .catch(()=>{
      localStorage.removeItem('token');
      setToken("");
    })

  },[])
  if(token){
=======
    checkToken(getUserInfo(dispatch),dispatch);
  },[localStorage.getItem("token")])
>>>>>>> 0d8e2ff28a973aef0da7812ce8e8c87efaa683cf
    return (
      <div>
        <Home children={children} />
      </div>
    );
  
};

export default HomePage;
