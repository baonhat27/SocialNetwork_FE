import React from "react";
import NewsFeed from "./component/NewsFeed";
import PostCreateContainer from "../PostCreateForm/PostCreateContainer";

const NewsFeedContainer = () => {
  return (
    <NewsFeed>
      <PostCreateContainer />
    </NewsFeed>
  );
};

export default NewsFeedContainer;
