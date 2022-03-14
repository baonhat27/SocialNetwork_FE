import React from "react";
import NewsFeed from "./component/NewsFeed";
import PostCreateContainer from "../PostCreateForm/PostCreateContainer";
import PostListContainer from "../PostList/PostListContainer";

const NewsFeedContainer = () => {
  return (
    <NewsFeed>
      <PostCreateContainer />
      <PostListContainer />
    </NewsFeed>
  );
};

export default NewsFeedContainer;
