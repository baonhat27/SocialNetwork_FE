import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../../shared/service";
import Post from "../../containers/Post";
import styles from "./styles.module.css";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    console.log("a");
    getPost(postId).then((res) => setPost(res.data));
  }, []);

  return post ? (
    <div className={styles.post}>
      <Post post={post} />
    </div>
  ) : (
    <p className={styles.not_found}>Post not found</p>
  );
}
