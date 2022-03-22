import { useState, useEffect } from "react";
import { getUserProfile } from "../../shared/service";
import PostHeader from "./components/PostHeader";
import styles from "./styles.module.css";
import PostContent from "./components/PostContent";
import PostImageList from "./components/PostImageList";
import Comment from "./components/Comment";
import Reaction from "./components/Reactions";
import PostEdit from "./components/PostEdit";

function Post({ post, onDeletePost }) {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState(post.content);
  const [images, setImages] = useState(post.images);

  const onUpdatePost = () => {
    setIsEdit(true);
  };

  const onSubmit = (text, images) => {
    setContent(text);
    setImages(images);
  };

  return (
    <div className={styles.post}>
      <PostHeader
        postId={post._id}
        user={post.createdBy}
        createdAt={post.createdAt}
        onDeletePost={onDeletePost}
        onUpdatePost={onUpdatePost}
      />

      {isEdit ? (
        <PostEdit
          postId={post._id}
          postText={content}
          postImages={images}
          cancel={() => setIsEdit(false)}
          submit={onSubmit}
        />
      ) : (
        <>
          <PostContent content={content} />
          {images.length !== 0 && <PostImageList images={images} />}
        </>
      )}
      <Reaction postId={post._id} />
      <Comment postId={post._id} />
    </div>
  );
}

export default Post;
