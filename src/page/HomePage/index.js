import Home from "./Home";
import React,{useEffect,useState} from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserInfomation } from "../../shared/store/redux/actions";
import axios from "axios";
import { SERVER } from "../../shared/store/env";
import authHeader from "../../shared/service/authHeader";
import getUserInfo from "../../shared/service/getUserInfo";
import { checkToken } from "../../shared/service/tokenCheck";
const HomePage = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    checkToken(dispatch);
  },[])
    return (
      <div>
        <Home/>
      </div>
    );
  
};

export default HomePage;

