import React from 'react'
import HeaderSettingComponent from './HeaderSetting'

function HeaderSettingContainer(props) {
    const logout=()=>{
        localStorage.removeItem("token");
        window.location="/login";
    }
    return (
        <div>
            <HeaderSettingComponent user={props.user} logout={logout}/>
        </div>
    )
}

export default HeaderSettingContainer
