import Home from "./Home";
import React,{useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import getUserInfo from "../../shared/service/getUserInfo";
import { checkToken } from "../../shared/service/tokenCheck";
const HomePage = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    checkToken(getUserInfo(dispatch),dispatch);
  },[localStorage.getItem("token")])
    return (
      <div>
        <Home/>
      </div>
    );
  
};

export default HomePage;

