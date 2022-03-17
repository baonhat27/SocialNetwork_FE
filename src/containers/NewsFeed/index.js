import React, { useEffect, useState } from "react";
import PostCreateContainer from "../PostCreateForm/index.js";
import PostList from "../PostList";
import { getPosts } from "../../shared/service";

import styles from "./NewsFeed.module.css";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setPosts(res.data.results));
  }, []);

  return (
    <div className={styles.newsfeed}>
      <PostCreateContainer />
      <PostList posts={posts} />
    </div>
  );
};

export default NewsFeed;
