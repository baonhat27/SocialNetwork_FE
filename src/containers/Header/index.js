import React, { useState } from "react";
import _Header from "./Header";

export default function _Header(props) {
  const [showNoti, setShowNoti] = useState(false);
<<<<<<< HEAD
  const handleShowNoti = () =>{
    setShowNoti(!showNoti)
    // console.log(showNoti);
  }
  return <_Header 
            showNoti={showNoti} 
            setShowNoti={setShowNoti} 
            handleShowNoti={handleShowNoti}
        />;
};

export default Header;
=======
  const handleShowNoti = () => {
    setShowNoti(!showNoti);
    console.log(showNoti);
  };
  return (
    <Header
      showNoti={showNoti}
      setShowNoti={setShowNoti}
      handleShowNoti={handleShowNoti}
    />
  );
}
>>>>>>> d58112c85d8555efff511b699fd86b15c56c8b69
