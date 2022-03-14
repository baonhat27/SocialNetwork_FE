import React from 'react';
import { Layout} from "antd";
import { Avatar } from 'antd';
import { UserOutlined, BellOutlined  } from '@ant-design/icons';
import styles from "./Header.module.css"
import Search from '../../../components/Search/Search';


const { Header } = Layout;
const img_url = "https://seeklogo.com/images/S/svg-logo-A7D0801A11-seeklogo.com.png"

const _Header = () => {
    return (
        <Header className={styles.header}>
            <div class={styles.header_left}>
                <img className={styles.img_logo}
                    src={img_url}
                />
            </div>
            <div className={styles.header_mid}>
                <Search/>
            </div>
            <div class={styles.header_right}>
                <BellOutlined
                    style={{fontSize: '20px', color:'white'}}
                />
                <Avatar size="40" icon={<UserOutlined />} style={{marginLeft: 20,marginRight: 0}} />
            </div>
        </Header>
    );
};

export default _Header;