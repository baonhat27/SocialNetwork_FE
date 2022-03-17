import React, { useState } from "react";
import Header from "./Header";

export default function _Header(props) {
  const [showNoti, setShowNoti] = useState(false);
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
