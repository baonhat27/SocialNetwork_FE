import React from "react";
import PostCreateContainer from "../PostCreateForm/index.js";
import PostList from "../PostList";

import styles from "./NewsFeed.module.css";

const NewsFeed = () => {
  return (
    <div className={styles.newsfeed}>
      <PostCreateContainer />
      <PostList />
    </div>
  );
};

export default NewsFeed;
