import { useState, useEffect } from "react";
import { getUserProfile } from "../../shared/service"
import PostBody from "./component/PostBody";
import PostHeader from "./components/PostHeader";
import styles from "./styles.module.css";

function Post({ post }) {
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

export default Post;
