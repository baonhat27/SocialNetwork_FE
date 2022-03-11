import Home from "./component/Home"
import React from 'react';
import HeaderContainer from "../header/HeaderContainer";

const HomeContainer = () => {
    return (
        <div>
            <HeaderContainer/>
            <Home/>
        </div>
    );
};

export default HomeContainer;