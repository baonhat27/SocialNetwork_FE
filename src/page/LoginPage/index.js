import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUserInfomation } from "../../shared/store/redux/actions";
import Login from "./Login"
import { login, signup } from "./service";
export default function LoginPage(props){
    const dispatch=useDispatch();
    const history=useHistory();
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
            localStorage.setItem("refreshToken",user.refreshToken);
            localStorage.setItem("userId",user.data._id)
            dispatch(addUserInfomation(user.data));
            history.push('/profile');
        }
    }
    async function signupAccount(){
        if(password===retypePassword){
            const user=await signup(username,password);
            if(user.success){
                alert('Tạo mới tài khoản thành công, vui lòng đăng nhập để sử dụng');
                setShowSignUp(false);
            }
            else{
                alert(user.message);
            }
        }
        else{
            alert('Nhập lại mật khẩu chưa chính xác!');
        }
    }
    return <Login
    login={loginUser}
    showSignUp={showSignUp}
    setShowSignUp={setShowSignUp}
    username={username}
    handleUsername={handleUsername}
    password={password}
    handlePassword={handlePassword}
    retypePassword={retypePassword}
    handleRetypePassword={handleRetypePassword}
    signupAccount={signupAccount}
    />
}