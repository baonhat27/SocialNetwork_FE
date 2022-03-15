import React from 'react'
import ProfilePageComponent from './component/ProfilePage';
import {useSelector} from 'react-redux';
function ProfilePageContainer() {
    const user=useSelector(state=>state.user);
    console.log(user);
    return(
        <ProfilePageComponent user={user}/>
    )
}

export default ProfilePageContainer;
