import React from 'react';
import styles from './SideBar.module.css'
import {  Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";


const SideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={`${styles.user_info} ${styles.sidebar_item}`}>
                    <Avatar size="large" icon={<UserOutlined/>}></Avatar>
                    <div className={styles.user_name}> Nhật</div>
            </div>
            <div className={styles.sidebar_item}>
                Bảng tin
            </div>
            <div className={styles.sidebar_item}>Tường công ty</div>
            <div className={styles.sidebar_item}>Cá Nhân</div>
        </div>
    );
};

export default SideBar;