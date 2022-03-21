import React from "react";
import { Layout } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./header.module.css";
import Search from "../../components/Search/Search";
import Notification from "./component/Notification";
import { Link } from "react-router-dom";
import HeaderSettingContainer from "./component/HeaderSetting";

const img_url =
  "https://seeklogo.com/images/S/svg-logo-A7D0801A11-seeklogo.com.png";

const _Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_left}>
        <Link to="/home">
          <img className={styles.img_logo} alt="logo" src="https://www.telio.vn/static/1ab7f07ebfb83c92f7f48ce09a93a1cc/4fd43/telio-logo.png" />
        </Link>
        <Search searchShow={props.searchShow} setSearchShow={props.setSearchShow}/>
      </div>
      <div className={styles.header_mid}>
        
      </div>
      <div className={styles.header_right}>
      <div style={{position:"relative"}}>
        <i class={"fa-solid fa-comment-dots "+styles.icon}></i>
        </div>
        <Notification 
          showNoti={props.showNoti} 
          handleShowNoti={props.handleShowNoti}
        />
        <div style={{position:"relative"}}>
          <i class={"fa-solid fa-caret-down "+styles.icon} onClick={function(){
            props.setHeaderSettingShow(props.headerSettingShow?false:true);
          }}></i>
          {props.headerSettingShow?<HeaderSettingContainer user={props.user}/>:<></>}
        </div>
      </div>
    </header>
  );
};

export default _Header;

