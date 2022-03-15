import { useState, useEffect } from "react";
import { getUserProfile } from "../services";
import PostBody from "../../PostBody/components";
import PostHeader from "../../PostHeader/components";
import styles from "./styles.module.css";

function PostItem({ post }) {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      const userRes = await getUserProfile(post.createdBy);
      if (userRes.status === 200) {
        setUser(userRes.data);
      } else {
        setError(userRes.data);
      }
    })();
  }, []);

  return (
    <div className={styles.post_item}>
      <PostHeader
        avatar={""}
        userFirstName={"Nhat"}
        userLastName={"Bao"}
        username={"baonhat"}
        createdAt={post.createdAt}
      />
      <PostBody content={post.content} images={post.images} />
    </div>
  );
}

export default PostItem;
