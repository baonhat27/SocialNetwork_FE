import React, { useEffect, useState } from 'react'
import ProfilePageComponent from './Profile';
import { useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getUserById } from './service';
import { useDispatch } from "react-redux";
import { addUserInfomation } from "../../shared/store/redux/actions";
import axios from "axios";
import { SERVER } from "../../shared/store/env";
function ProfilePage(props) {
    const user= useSelector(state=>state.user);
    const [friend,setFriend]=useState();
    const [settingShow,setSettingShow]=useState(false);
    const [selectedAvatarForm,setSelectedAvatarForm]=useState(false);
    const dispatch=useDispatch();
    const [token,setToken]=useState(localStorage.getItem('token'))
  useEffect(()=>{
    axios.get(SERVER+'v1/users/userInfo',{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    .then((userInfo)=>userInfo.data)
    .then((userInfo)=>{
      // console.log(userInfo.data)
      dispatch( addUserInfomation(userInfo.data));
    })
    .catch(()=>{
      localStorage.removeItem('token');
      setToken("");
    })
  },[])
    function useQuery() {
        const { search } = useLocation();
      
        return new URLSearchParams(search);
      }
    const query=useQuery()
    useEffect(async ()=>{
        if(query.get("id")!==user._id){
            const friend=await getUserById(query.get("id"))
            setFriend(friend.data);
        }
    },[])
    if(friend){
        return(
            <ProfilePageComponent friend={true} user={friend}/>
        )
    }
    else if(token){
        return(
            <ProfilePageComponent 
            selectedAvatarForm={selectedAvatarForm} setSelectedAvatarForm={setSelectedAvatarForm}
            settingShow={settingShow} setSettingShow={setSettingShow} friend={false} user={user}/>
        )
    }
    else{
        return <Redirect to="/login"></Redirect>
    }
}

export default ProfilePage;
