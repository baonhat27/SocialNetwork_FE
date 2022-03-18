import styles from "./styles.module.css";
import { timeFromNow } from "../../../shared/utils";
import clockLogo from "../../../shared/image/clock.png";
import defaultUserAvatar from "../../../shared/image/user.png";
export default function PostHeader({ user, createdAt }) {
  return (
    <div className={styles.header}>
      <img
        className={styles["avatar"]}
        src={user.avatar === "no infromation" ? defaultUserAvatar : user.avatar}
        alt=""
      />
      <div className={styles.info}>
        <span
          className={styles.user_name}
        >{`${user.firstName} ${user.lastName}`}</span>
        <div className={styles.time_box}>
          <img className={styles["clock"]} src={clockLogo} alt="" />
          <span className={styles.time}>{timeFromNow(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
