import styles from "./Home.module.css" 
import React from "react";
import SideBarContainer from "../../SideBar/SideBarContainer";
import ChatContainer from "../../chat/ChatContainer";
import NewsFeedContainer from "../../NewsFeed/NewsFeedContainer";


const Home = (props) => {
    return (
        <div className={styles.home}>
            <SideBarContainer/>
            <NewsFeedContainer/>
            <ChatContainer/>
        </div>
            
    );
};

export default Home;