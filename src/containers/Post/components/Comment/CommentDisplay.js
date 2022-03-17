import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import styles from "./styles.module.css";

function CommentDisplay(props) {
  return (
    <div className={styles.comment_box}>
      <div className={styles.info}>
        <Avatar
          src="https://joeschmoe.io/api/v1/random"
          style={{ border: "1px solid #1c85c4" }}
          size="40"
          icon={<UserOutlined />}
        />
        <span className={styles.user_name}>
          Người yêu cũ
        </span>
      </div>
      <div className={styles.comment_content}>Nội dung còm men</div>
      <div className={styles.comment_footer}></div>
    </div>
  );
}

export default CommentDisplay;
