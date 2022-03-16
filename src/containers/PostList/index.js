import Post from "../Post";
function PostList({ posts }) {
  return posts.map((post) => <Post key={post._id} post={post} />);
}

export default PostList;
