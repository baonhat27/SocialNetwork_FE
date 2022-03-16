import { timeFromNow } from "../../../../shared/service";
import styles from "./styles.module.css";
import clock from "../../../../shared/image/clock.png";
import user from "../../../../shared/image/user.png"
export default function PostHeader({
  avatar,
  userFirstName,
  userLastName,
  username,
  createdAt,
}) {
  return (
    <div className={styles.header}>
      <img className={styles["avatar"]} src={user} alt="" />
      <div className={styles.info}>
        <span
          className={styles.user_name}
        >{`${userFirstName} ${userLastName}`}</span>
        <div className={styles.time_box}>
          <img className={styles["clock"]} src={clock} alt="" />
          <span className={styles.time}>{timeFromNow(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}
