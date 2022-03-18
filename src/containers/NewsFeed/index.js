import React, { useEffect, useState, useRef } from "react";
import PostGroup from "../PostGroup";
import styles from "./NewsFeed.module.css";

const NewsFeed = () => {
  return (
    <div className={styles.newsfeed}>
      <div className={styles.post}>
        <PostGroup />
      </div>
    </div>
  );
};

export default NewsFeed;
