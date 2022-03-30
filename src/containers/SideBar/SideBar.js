import React from "react";
import styles from "./SideBar.module.css";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";

const _SideBar = (props) => {
  const img_url = props.user.avatar;
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar1}>
        <div className={styles.user_info}>
          <Avatar src={img_url} size={40} style={{ width: 40 }} />
          <div className={styles.user_name}>
            {" "}
            {props.user.firstName + " " + props.user.lastName}
          </div>
        </div>
        <div className={styles.sidebar_list}>
          <div className={styles.sidebar_item} tabIndex="1">
            <i
              className="fa-solid fa-newspaper"
              style={{ marginRight: "10px" }}
            ></i>
            Bảng tin
          </div>
          <div className={styles.sidebar_item} tabIndex="1">
            <i
              className="fa-solid fa-building"
              style={{ marginRight: "10px" }}
            ></i>
            Tường công ty
          </div>
          <div className={styles.sidebar_item} tabIndex="1">
            <i className="fa-solid fa-user" style={{ marginRight: "10px" }}></i>
            Cá Nhân
          </div>
          <div className={styles.sidebar_item} tabIndex="1">
            <i
              className="fa-solid fa-users"
              style={{ marginRight: "10px" }}
            ></i>
            Nhóm
          </div>
        </div>
      </div>
      {/* <div className={styles.sidebar2}></div> */}
    </div>
  );
};

export default _SideBar;
