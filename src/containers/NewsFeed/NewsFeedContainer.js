import React from "react";
import NewsFeed from "./component/NewsFeed";
import PostCreateContainer from "../PostCreateForm/PostCreateContainer";
import NewFeedPostListContainer from "../NewFeedPostList/NewFeedPostListContainer";

const NewsFeedContainer = () => {
  return (
    <NewsFeed>
      <PostCreateContainer />
      <NewFeedPostListContainer />
    </NewsFeed>
  );
};

export default NewsFeedContainer;
