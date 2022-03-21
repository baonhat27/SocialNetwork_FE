import styles from "./styles.module.css";
import Comment from "./Comment";

function CommentDisplay({
  comments,
  handleShowMore,
  onDeleteComment,

}) {
  // console.log(checkEditButton);
  return (
    <div>
      <div className={styles.showmore} onClick={handleShowMore}>
        Hiển thị thêm bình luận
      </div>
      {comments.map((comment) => {
        return (
          <Comment
            key={comment._id}
            comment={comment}
            onDeleteComment={onDeleteComment}
          />
        );
      })}
    </div>
  );
}

export default CommentDisplay;
