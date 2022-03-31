import { useState, useRef } from "react";
import styles from "./styles.module.css";
import { timeFromNow } from "../../../shared/utils";
import clockLogo from "../../../shared/image/clock.png";
import defaultUserAvatar from "../../../shared/image/user.png";
import dots from "../../../shared/image/dots.png";
import { deletePost } from "../../../shared/service";

export default function PostHeader({
  postId,
  user,
  createdAt,
  onDeletePost,
  onUpdatePost,
}) {
  const [isDisplayOptions, setIsDisplayOptions] = useState(false);
  const [error, setError] = useState("");
  const optionBox = useRef();

  const displayOptions = () => {
    setIsDisplayOptions(!isDisplayOptions);
  };

  const handleUpdate = async () => {
    setIsDisplayOptions(false);
    onUpdatePost();
  };

  const handleDelete = async () => {
    setIsDisplayOptions(false);
    try {
      const res = await deletePost(postId);

      res.success
        ? onDeletePost(postId) && setError("")
        : setError(res.message);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles["avatar_box"]}>
          <img
            className={styles["avatar"]}
            src={
              user.avatar === "no information" ? defaultUserAvatar : user.avatar
            }
            alt=""
          />
        </div>
        <div className={styles.info}>
          <span
            className={styles.user_name}
          >{`${user.firstName} ${user.lastName}`}</span>
          <div className={styles.time_box}>
            <img className={styles["clock"]} src={clockLogo} alt="" />
            <span className={styles.time}>{timeFromNow(createdAt)}</span>
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
        <img
          src={dots}
          className={styles.dots}
          alt=""
          onClick={displayOptions}
        />
        {isDisplayOptions && (
          <div ref={optionBox} tabIndex="1" className={styles.options}>
            <span className={styles.btn_link} onClick={handleUpdate}>
              Edit post
            </span>
            <span
              className={`${styles.btn_link} ${styles.danger}`}
              onClick={handleDelete}
            >
              Delete post
            </span>
          </div>
        )}
      </div>
    </>
  );
}
