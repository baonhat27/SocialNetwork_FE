import React from 'react'
import Profile from './Profile';
import {useSelector} from 'react-redux';
function ProfilePage() {
    const user=useSelector(state=>state.user);
    console.log(user);
    return(
        <Profile user={user}/>
    )
}

export default ProfilePage;
