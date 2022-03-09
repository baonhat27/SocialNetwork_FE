import styles from "./HomeComponent.module.css" 
import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SiderComponent from "../../sider/component/SiderComponent";

const {  Content } = Layout;

const HomeComponent = (props) => {
    return (
        <div>
            <SiderComponent/>
            <Layout>
                <Content>Content</Content>
            </Layout>
        </div>
    );
};

export default HomeComponent;