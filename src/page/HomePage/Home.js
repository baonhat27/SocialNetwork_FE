import styles from "./Home.module.css" 
import React from "react";
import SideBar from "../../containers/SideBar/SideBar";
import NewsFeed from "../../containers/NewsFeed/NewsFeed";
import Chat from "../../containers/Chat/Chat"
import _Header from "../../containers/Header/Header";


const Home = (props) => {
    return (
        <div >
            <div className={styles.header}>
                <_Header/>
            </div>
            <div className={styles.home}>
                <SideBar/>
                <NewsFeed/>
                <Chat/>
            </div>
        </div>
            
    );
};

export default Home;