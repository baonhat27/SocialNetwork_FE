import Home from "./Home";
import React from "react";
import { Redirect } from "react-router-dom";

const HomePage = () => {
  const token=localStorage.getItem('token');
  if(token){
    return (
      <div>
        <Home/>
      </div>
    );
  }
  else{
    return <Redirect to="/login"></Redirect>
  }
};

export default HomePage;

