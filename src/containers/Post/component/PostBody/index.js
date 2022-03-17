import PostContent from "../../components/PostContent"
import PostImageList from "../../PostImageList"
export default function PostBody({ content, images }) {
  return (
    <>
      <PostContent content={content} />
      <PostImageList images={images} />
    </>
  );
}
