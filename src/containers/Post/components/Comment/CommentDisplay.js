import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import styles from "./styles.module.css";

<<<<<<< HEAD
function CommentDisplay({ comments }) {
=======
function CommentDisplay({comments}) {
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
  // {console.log(comments)}
  return comments.map((comment) => {
    const user = comment.createdBy;
    return (
<<<<<<< HEAD
      <div className={styles.comment_box1} key={comment._id}>
=======
      <div className={styles.comment_box} key={comment._id} >
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
        <div className={styles.info}>
          <Avatar
            src={user.avatar}
            style={{ border: "1px solid #1c85c4" }}
            size={40}
          />
<<<<<<< HEAD
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
=======
          <span className={styles.user_name}>{user.firstName+" "+user.lastName}</span>
        </div>
        <div className={styles.comment_content} dangerouslySetInnerHTML={{__html: comment.content}}></div>
        <div className={styles.comment_footer}></div>
      </div>
    );
  })
      
  ;
>>>>>>> dce44190bf1f6e3c3a21b8e9ff65cb7a7d42da7a
}

export default CommentDisplay;
