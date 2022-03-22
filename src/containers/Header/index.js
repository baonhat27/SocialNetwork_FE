import React, { useState } from "react";
import _Header from "./Header";
import { useSelector } from "react-redux";

export default function Header(props) {
  const user = useSelector((state) => state.user);
  const [showNoti, setShowNoti] = useState(false);
  const [headerSettingShow, setHeaderSettingShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const handleShowNoti = () => {
    setShowNoti(!showNoti);
    console.log(showNoti);
  };
  return (
    <_Header
      user={user}
      showNoti={showNoti}
      setShowNoti={setShowNoti}
      handleShowNoti={handleShowNoti}
      headerSettingShow={headerSettingShow}
      setHeaderSettingShow={setHeaderSettingShow}
      searchShow={searchShow}
      setSearchShow={setSearchShow}
    />
  );
}
