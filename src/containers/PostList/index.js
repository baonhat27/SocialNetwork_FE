import Post from "../Post";
function PostList({ posts, onDeletePost }) {
  return posts.map((post) => (
    <Post key={post._id} post={post} onDeletePost={onDeletePost} />
  ));
}

export default PostList;
