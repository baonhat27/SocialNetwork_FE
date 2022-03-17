import React from "react";
import { Layout } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./header.module.css";
import Search from "../../components/Search/Search";
import Notification from "./component/Notification";
import { Link } from "react-router-dom";

const img_url =
  "https://seeklogo.com/images/S/svg-logo-A7D0801A11-seeklogo.com.png";

const _Header = (props) => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.header_left}>
        <img className={styles.img_logo} alt="logo" src={img_url} />
      </div>
      <div className={styles.header_mid}>
        <Search />
      </div>
      <div className={styles.header_right}>
        <i
          className="fa-solid fa-bell"
          style={{ color: "white", fontSize: 20, marginRight: 20 }}
          onClick={props.handleShowNoti}
        ></i>
        <Notification showNoti={props.showNoti} />
        <Link to="/profile" >
          <Avatar
            src={props.user.avatar}
            size="40"
            icon={<UserOutlined />}
            style={{ marginLeft: 20, marginRight: 0 }}
            onClick={props.handleAvaClick}
          />
        </Link>
      </div>
    </Layout.Header>
  );
};

export default _Header;

