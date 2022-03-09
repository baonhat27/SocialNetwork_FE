import styles from "./HomeComponent.module.css" 
import React from "react";
import { Layout, Avatar } from "antd";
import SiderContainer from "../../sider/SiderContainer";
import ContentContainer from "../../content/ContentContainer";

const {  Content } = Layout;

const HomeComponent = (props) => {
    return (
        <div className={styles.home}>
            <SiderContainer/>
            <ContentContainer/>
        </div>
            
    );
};

export default HomeComponent;