import styles from "./Home.module.css";
import React from "react";
import SideBar from "../../containers/SideBar";
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
      </div>
    </div>
  );
};

export default Home;
