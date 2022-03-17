import React from 'react';
import _SideBar from './SideBar';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const user = useSelector(state => state.user)
    console.log(user);
    return (
        <_SideBar
            user = {user}
        />
    );
};

export default SideBar;