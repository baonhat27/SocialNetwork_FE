import React from "react";
import NewsFeed from "./NewsFeed";
import PostCreateContainer from "../PostCreateForm/index.js";
import NewFeedPostListContainer from "../NewFeedPostList";

const NewsFeed= () => {
  return (
    <NewsFeed>
      <PostCreateContainer />
      <NewFeedPostListContainer />
    </NewsFeed>
  );
};

export default NewsFeed;
