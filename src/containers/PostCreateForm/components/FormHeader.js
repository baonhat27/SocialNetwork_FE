import styles from "./styles.module.css";
import editLogo from "../../../shared/image/edit.png";

function PostCreateHeader() {
  return (
    <div className={styles.header}>
      <img className={styles["img-small"]} src={editLogo} alt="editPost" />
      <span>Create your post here</span>
    </div>
  );
}

export default PostCreateHeader;
