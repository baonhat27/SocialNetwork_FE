<<<<<<< HEAD
import React from 'react';
import { Layout} from "antd";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from "./header.module.css"
import Search from '../../components/Search/Search';
import _Notification from '../Header/component/Notification/Notification'

const { Header } = Layout;
const img_url = "https://seeklogo.com/images/S/svg-logo-A7D0801A11-seeklogo.com.png"

const _Header = (props) => {
    return (
        <Header className={styles.header}>
            <div class={styles.header_left}>
                <img className={styles.img_logo}
                    alt="logo"
                    src={img_url}
                />
            </div>
            <div className={styles.header_mid}>
                <Search/>
            </div>
            <div class={styles.header_right}>
                <i class="fa-solid fa-bell"
                    style={{color:"white", fontSize:20, marginRight:20}}
                    onClick={props.handleShowNoti}
                >
                </i>
                <_Notification showNoti={props.showNoti}/>
                <Avatar size="40" icon={<UserOutlined />} style={{marginLeft: 20,marginRight: 0}} />
            </div>
        </Header>
    );
=======
import React from "react";
import { Layout } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./header.module.css";
import Search from "../../components/Search/Search";
import Notification from "./component/Notification";

const img_url =
  "https://seeklogo.com/images/S/svg-logo-A7D0801A11-seeklogo.com.png";

const Header = (props) => {
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
        <Avatar
          size="40"
          icon={<UserOutlined />}
          style={{ marginLeft: 20, marginRight: 0 }}
        />
      </div>
    </Layout.Header>
  );
>>>>>>> d58112c85d8555efff511b699fd86b15c56c8b69
};

export default Header;

