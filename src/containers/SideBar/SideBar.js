import React from "react";
import styles from "./SideBar.module.css";
import { Avatar, Image } from "antd";

const _SideBar = (props) => {
  const img_url =  "a"
  return (
    <div className={styles.sidebar}>
      <div className={styles.user_info}>
        <Avatar
          src={<Image style={{width:50, height:50}} src={img_url} />}
          size={50}
          style={{ border: "1px solid #1c85c4" }}
        />
        {/* <div className={styles.user_name}> {props.user.firstName + props.user.lastName }</div> */}
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
          <i className="fa-solid fa-users" style={{ marginRight: "10px" }}></i>
          Nhóm
        </div>
      </div>
    </div>
  );
};

export default _SideBar;
