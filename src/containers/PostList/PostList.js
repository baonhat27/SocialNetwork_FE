import { useState, useEffect } from "react";
import { getPosts } from "../services";
import Post from "../../Post";

function _PostList() {
  const [posts, setPosts] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      const postRes = await getPosts();
      if (postRes.status === 200) {
        setPosts(postRes.data);
        setError("");
      } else {
        setError(postRes.data);
      }
    })();
  }, []);
  return (
    <div>
      {!posts
        ? "Loading"
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}

export default _PostList;
