import React, { useEffect, useState, useRef } from "react";
import PostGroup from "../PostGroup";
import styles from "./NewsFeed.module.css";

const NewsFeed = () => {
  return (
    <div className={styles.newsfeed}>
      <PostGroup />
    </div>
  );
};

export default NewsFeed;
