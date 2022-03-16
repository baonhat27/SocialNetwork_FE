import React, { useState } from "react";
import Header from "./Header";

const Header = (props) => {
  const [showNoti, setShowNoti] = useState(false);
  const handleShowNoti = () =>{
    setShowNoti(!showNoti)
    console.log(showNoti);
  }
  return <Header 
            showNoti={showNoti} 
            setShowNoti={setShowNoti} 
            handleShowNoti={handleShowNoti}
        />;
};

export default Header;
