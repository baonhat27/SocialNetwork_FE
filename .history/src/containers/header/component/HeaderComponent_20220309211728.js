import React from 'react';
import { Layout} from "antd";
import { Avatar } from 'antd';
import { UserOutlined, BellOutlined  } from '@ant-design/icons';
import styles from "./header.module.css"
import Search from '../../../components/Search/Search';


const { Header } = Layout;


const HeaderComponent = () => {
    return (
        <Header className={styles.header}>
            <div class={styles.header_left}>
                <img className={styles.img_logo}
                    src='https://images.yourstory.com/cs/images/companies/484073261089321671237850235461832427438080n-1609922812339.png'
                />
                <Search/>
            </div>
            <div class={styles.header_right}>
                <BellOutlined
                    style={{fontSize: '20px', color:'white'}}
                />
                <Avatar size="small" icon={<UserOutlined />} style={{margin:20 0}} />
            </div>
        </Header>
    );
};

export default HeaderComponent;