import Home from "./Home";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserInfomation } from "../../shared/store/redux/actions";
import axios from "axios";
import { SERVER } from "../../shared/store/env";
const HomePage = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get(SERVER + "v1/users/userInfo", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((userInfo) => userInfo.data)
      .then((userInfo) => {
        dispatch(addUserInfomation(userInfo.data));
      })
      .catch(() => {
        localStorage.removeItem("token");
        setToken("");
      });
  }, []);
  if (token) {
    return (
      <div>
        <Home />
      </div>
    );
  } else {
    return <Redirect to="/login"></Redirect>;
  }
};

export default HomePage;
