import React from 'react';
import styles from './Sider.module.css'
import {  Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";


const SiderComponent = (props) => {
    return (
        <div className={styles.sider}>
            <div className={`${styles.user_info} ${styles.sider_item}`}>
                    <Avatar size="large" icon={<UserOutlined/>}></Avatar>
                    <div className={styles.user_name}> Nhật</div>
            </div>
            <div className={styles.sider_item}>
                Bảng tin
            </div>
            <div className={styles.sider_item}>Tường công ty</div>
            <div className={styles.sider_item}>Cá Nhân</div>
        </div>
    );
};

export default SiderComponent;