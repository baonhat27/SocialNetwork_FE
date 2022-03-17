import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import styles from "./styles.module.css";
import PostImageList from "./components/PostImageList";

function Post({ post }) {
  return (
    <div className={styles.post}>
      <PostHeader userId={post.createdBy} createdAt={post.createdAt} />
      <PostContent content={post.content} />
      <PostImageList images={post.images} />
    </div>
  );
}

export default Post;
