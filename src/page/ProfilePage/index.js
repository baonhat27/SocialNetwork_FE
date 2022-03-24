import React, { useEffect, useState } from "react";
import ProfilePageComponent from "./Profile";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getUserById } from "./service";
import { useDispatch } from "react-redux";
import getUserInfo from '../../shared/service/getUserInfo';
import { checkToken } from '../../shared/service/tokenCheck';
function ProfilePage(props) {
    const user= useSelector(state=>state.user);
    const [friend,setFriend]=useState();
    const [settingShow,setSettingShow]=useState(false);
    const [selectedAvatarForm,setSelectedAvatarForm]=useState(false);
    const dispatch=useDispatch();
  useEffect(()=>{
    checkToken(getUserInfo(dispatch),dispatch);
  },[localStorage.getItem("token")])
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
    else if(localStorage.getItem("token")){
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
