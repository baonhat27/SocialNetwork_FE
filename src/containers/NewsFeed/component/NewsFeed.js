import React from "react";
import styles from "./NewsFeed.module.css";

const NewsFeed = ({ children }) => {
  return <div className={styles.newsfeed}>{children}</div>;
};

export default NewsFeed;

