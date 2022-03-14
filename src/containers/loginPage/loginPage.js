import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfomation } from "../../shared/store/redux/actions";
import LoginPageComponent from "./component/LoginPage";
import { login } from "./service";
export default function LoginPageContainer(props){
    const dispatch=useDispatch();
    const [showSignUp,setShowSignUp]=useState(false);
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [retypePassword,setRetypePassword]=useState("");
    const handleUsername=(item)=>{
        setUsername(item.target.value);
    }
    const handlePassword=(item)=>{
        setPassword(item.target.value);
    }
    const handleRetypePassword=(item)=>{
        setRetypePassword(item.target.value);
    }
    async function loginUser(){
        const user=await login(username,password);
        if(!user.success){
            alert(user.message);
        }
        else{
            localStorage.setItem("token",user.token);
            dispatch(addUserInfomation(user.data));
            window.location="/home";
        }
    }
    return <LoginPageComponent 
    login={loginUser}
    showSignUp={showSignUp}
    setShowSignUp={setShowSignUp}
    username={username}
    handleUsername={handleUsername}
    password={password}
    handlePassword={handlePassword}
    retypePassword={retypePassword}
    handleRetypePassword={handleRetypePassword}
    />
}