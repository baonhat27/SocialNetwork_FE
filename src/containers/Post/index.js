import { useState, useEffect } from "react";
import { getUserProfile } from "../../shared/service"
import PostHeader from "./components/PostHeader";
import styles from "./styles.module.css";
import PostContent from "./components/PostContent"
import PostImageList from "./components/PostImageList"
import Comment from "./components/Comment";
import ReactionBar from "./components/Reactions";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../shared/store/redux/actions";
function Post({ post }) {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const userRes = await getUserProfile(post.createdBy);
      if (userRes.status === 200) {
        setUser(userRes.data);
      } else {
        setError(userRes.data);
      }
    })()
    }, []);
    
    return (
      <div className={styles.post}>
      <PostHeader userId={post.createdBy} createdAt={post.createdAt} />
      <PostContent content={post.content} />
      {post.images.length !== 0 && <PostImageList images={post.images} />}
      <ReactionBar/>
      <Comment postId={post._id}/>
    </div>
  );
}

export default Post;
