import React from "react";
import styles from "./SideBar.module.css";
import { Avatar, Image } from "antd";

const SideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.user_info} >
                    <Avatar src={<Image src="https://joeschmoe.io/api/v1/random"  />} size={50}
                            style={{border:'1px solid #1c85c4'}}
                    />
                    <div className={styles.user_name}> Nhật</div>
            </div>
            <div className={styles.sidebar_list}>
                <div className={styles.sidebar_item} tabindex = "1">
                    <i class="fa-solid fa-newspaper" style={{marginRight:"10px"}}></i>
                    Bảng tin
                </div>
                <div className={styles.sidebar_item} tabindex = "1">
                    <i class="fa-solid fa-building" style={{marginRight:"10px"}}></i>
                    Tường công ty
                </div>
                <div className={styles.sidebar_item} tabindex = "1">
                    <i class="fa-solid fa-user" style={{marginRight:"10px"}}></i>
                    Cá Nhân
                </div>
                <div className={styles.sidebar_item} tabindex = "1">
                    <i class="fa-solid fa-users" style={{marginRight:"10px"}}></i>
                    Nhóm
                </div>
            </div>
        </div>
        <div className={styles.sidebar_item} tabIndex="1">
          <i className="fa-solid fa-users" style={{ marginRight: "10px" }}></i>
          Nhóm
        </div>
      </div>
    </div>
  );
};

export default SideBar;

