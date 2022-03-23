import React, { useState } from "react";
import _Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { searchInfo } from "../../shared/store/redux/actions";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const dispatch=useDispatch();
  const history=useHistory();
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
      history.push("/search?all="+searchKey);
      setSearchKey("");
    }
    setSearchShow(searchShow?false:true);
  }
  return (
    <_Header
      user={user}
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
