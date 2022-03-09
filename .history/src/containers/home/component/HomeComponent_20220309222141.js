import styles from "./HomeComponent.module.css" 
import React from "react";
import { Layout} from "antd";
import SiderContainer from "../../sider/SiderContainer";
import ContentContainer from "../../content/ContentContainer";
import ChatContainer from "../../chat/ChatContainer";

const {  Content } = Layout;

const HomeComponent = (props) => {
    return (
        <div className={styles.home}>
            <SiderContainer/>
            <ContentContainer/>
            <ChatContainer/>
        </div>
            
    );
};

export default HomeComponent;