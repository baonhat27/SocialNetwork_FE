import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import { SERVER } from "./shared/store/env";
import { addUserInfomation } from "./shared/store/redux/actions";
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get(SERVER+'v1/users/userInfo',{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    .then((userInfo)=>userInfo.data)
    .then((userInfo)=>{
      dispatch( addUserInfomation(userInfo.data));
    })
    .catch(()=>{
      localStorage.removeItem('token');
    })
  },[])
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/home">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
