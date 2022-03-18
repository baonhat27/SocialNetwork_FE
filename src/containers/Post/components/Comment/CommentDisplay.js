import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import styles from "./styles.module.css";

function CommentDisplay({ comments }) {
  // {console.log(comments)}
  return comments.map((comment) => {
    const user = comment.createdBy;
    return (
      <div className={styles.comment_box1} key={comment._id}>
        <div className={styles.info}>
          <Avatar
            src={user.avatar}
            style={{ border: "1px solid #1c85c4" }}
            size={40}
          />
        </div>
        <div className={styles.comment_content}>
          <span className={styles.user_name}>
            {user.firstName + " " + user.lastName}
          </span>
          <div className={styles.commentText} dangerouslySetInnerHTML={{ __html: comment.content }}></div>
        </div>
        <div className={styles.comment_footer}></div>
      </div>
    );
  });
}

export default CommentDisplay;
