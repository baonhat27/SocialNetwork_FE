import React, { useState } from "react";
import _Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { searchInfo } from "../../shared/store/redux/actions";

export default function Header(props) {
  const dispatch=useDispatch();
  const user = useSelector(state => state.user)
  const [showNoti, setShowNoti] = useState(false);
  const [headerSettingShow,setHeaderSettingShow]=useState(false);
  const [searchShow, setSearchShow]=useState(false);
  const [searchKey,setSearchKey]= useState("");
  // console.log("Props: " ,user)
  const handleShowNoti = () => {
    setShowNoti(!showNoti);
    console.log(showNoti);
  };
  const handleSearchKey=(item)=>{
    setSearchKey(item.target.value);
  }
  const search=()=>{
    if(searchKey!=""){
      dispatch(searchInfo(searchKey));
      setSearchKey("");
      props.setRedirect(true);
    }
    setSearchShow(searchShow?false:true);
  }
  return (
    <_Header
      user = {user}
      showNoti={showNoti}
      setShowNoti={setShowNoti}
      handleShowNoti={handleShowNoti}
      headerSettingShow={headerSettingShow} setHeaderSettingShow={setHeaderSettingShow}
      search={search}
      searchKey={searchKey} handleSearchKey={handleSearchKey}
      searchShow={searchShow} setSearchShow={setSearchShow}
    />
  );
}
