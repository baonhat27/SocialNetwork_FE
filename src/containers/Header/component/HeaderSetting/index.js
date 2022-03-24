import React from 'react'
import HeaderSettingComponent from './HeaderSetting'
import { logoutService } from './service';

function HeaderSettingContainer(props) {
    const logout=()=>{
        logoutService();
    }
    return (
        <div>
            <HeaderSettingComponent user={props.user} logout={logout}/>
        </div>
    )
}

export default HeaderSettingContainer
