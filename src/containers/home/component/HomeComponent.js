import styles from "./HomeComponent.module.css" 
import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SiderComponent from "../../sider/component/SiderComponent";

const { Header, Footer, Sider, Content } = Layout;

const HomeComponent = (props) => {
    return (
        <Layout>
            <SiderComponent>
                
            </SiderComponent>
                
           
            <Layout>
                <Content>Content</Content>
            </Layout>
        </Layout>
    );
};

export default HomeComponent;