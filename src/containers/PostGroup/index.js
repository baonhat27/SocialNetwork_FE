import { useState, useRef, useEffect } from "react";
import PostCreateForm from "../PostCreateForm";
import PostList from "../PostList";
import { getPosts } from "../../shared/service";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../shared/store/redux/actions";

export default function PostGroup({ createdBy, limit }) {
  const [posts, setPosts] = useState([]);
  const total = useRef(0);
  const count = useRef(0);
  const more = useRef(false);

  const fetch = async () => {
    const res = await getPosts(count.current, limit, createdBy);
    setPosts((old) => [...old, ...res.data.results]);
    total.current = res.data.total;
    count.current = count.current + res.data.results.length;
    more.current = count.current < total.current;
  };

  const handleLoadMorePost = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      more.current && fetch();
    }
  };

  useEffect(() => {
    fetch();
    console.log(createdBy)
    window.addEventListener("scroll", handleLoadMorePost);
    return () => {
      window.removeEventListener("scroll", handleLoadMorePost);
    };
  }, [createdBy]);

  const onCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const onDeletePost = (postId) => {
    setPosts(posts.filter((post) => post._id !== postId));
  };

  return (
    <>
      <PostCreateForm onCreatePost={onCreatePost} />
      <PostList posts={posts} onDeletePost={onDeletePost} />
    </>
  );
}
