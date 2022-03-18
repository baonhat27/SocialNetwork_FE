import { useState, useEffect } from "react";
import { getUserProfile } from "../../shared/service"
import PostHeader from "./components/PostHeader";
import styles from "./styles.module.css";
import PostContent from "./components/PostContent";
import PostImageList from "./components/PostImageList";
import Comment from "./components/Comment";
import ReactionBar from "./components/Reactions";

function Post({ post, onDeletePost }) {
  return (
    <div className={styles.post}>
      <PostHeader
        postId={post._id}
        user={post.createdBy}
        createdAt={post.createdAt}
        onDeletePost={onDeletePost}
      />
      <PostContent content={post.content} />
      {post.images.length !== 0 && <PostImageList images={post.images} />}
      <ReactionBar />
      <Comment postId={post._id} />
    </div>
  );
}

export default Post;
