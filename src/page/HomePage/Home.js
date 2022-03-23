import styles from "./Home.module.css";
import React from "react";
import SideBar from "../../containers/SideBar";
import Chat from "../../containers/Chat/Chat";
import Header from "../../containers/Header";

const Home = ({ children }) => {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.home}>
        <SideBar />
        {children}
        <Chat />
      </div>
    </div>
  );
};

export default Home;
