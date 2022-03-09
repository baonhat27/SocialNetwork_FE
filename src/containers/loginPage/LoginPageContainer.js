import { useState } from "react";
import LoginPageComponent from "./component/LoginPageComponent";

export default function LoginPageContainer(props){
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
    return <LoginPageComponent 
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