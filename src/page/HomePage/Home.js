import styles from "./Home.module.css";
import React from "react";
<<<<<<< HEAD
import NewsFeed from "../../containers/NewsFeed/NewsFeed";
import Chat from "../../containers/Chat/Chat"
import Header from "../../containers/Header";
import SideBar from "../../containers/SideBar";
=======
import SideBar from "../../containers/SideBar/SideBar";
import NewsFeed from "../../containers/NewsFeed";
import Chat from "../../containers/Chat/Chat";
import _Header from "../../containers/Header/Header";
>>>>>>> d58112c85d8555efff511b699fd86b15c56c8b69

const Home = (props) => {
<<<<<<< HEAD
    return (
        <div >
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.home}>
                <SideBar/>
                <NewsFeed/>
                <Chat/>
            </div>
        </div>
            
    );
=======
  return (
    <div>
      <div className={styles.header}>
        <_Header />
      </div>
      <div className={styles.home}>
        <SideBar />
        <NewsFeed />
        <Chat />
      </div>
    </div>
  );
>>>>>>> d58112c85d8555efff511b699fd86b15c56c8b69
};

export default Home;

