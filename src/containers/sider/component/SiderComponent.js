import React from 'react';
import styles from './Sider.module.css'
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const SiderComponent = (props) => {
    return (
        <div className={styles.sider}>
            <div className={styles.user_info}>
                    <Avatar size="large" icon={<UserOutlined/>}></Avatar>
                    <div className={styles.user_name}> Nhật</div>
                </div>
        </div>
    );
};

export default SiderComponent;