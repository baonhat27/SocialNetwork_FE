import React,{useState} from 'react'
import ProfilePageComponent from './Profile';
import { useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import localStorage from 'redux-persist/es/storage';
function ProfilePage() {
    const user= useSelector(state=>state.user);
    const [selectedAvatarForm,setSelectedAvatarForm]=useState(false);
    const [settingShow,setSettingShow]=useState(false);
    const token=localStorage.getItem('token');
    if(token){
        return(
            <ProfilePageComponent 
            selectedAvatarForm={selectedAvatarForm} setSelectedAvatarForm={setSelectedAvatarForm}
            settingShow={settingShow} setSettingShow={setSettingShow} user={user}/>
        )
    }
    else{
        return <Redirect to="/login"></Redirect>
    }
}

export default ProfilePage;
