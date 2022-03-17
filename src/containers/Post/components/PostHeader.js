import { useState } from "react";

import styles from "./styles.module.css";
import { timeFromNow } from "../../../shared/utils";
import clockLogo from "../../../shared/image/clock.png";
import defaultUserAvatar from "../../../shared/image/user.png";
import { useEffect } from "react";
import { getUserProfile } from "../../../shared/service";

export default function PostHeader({ userId, createdAt }) {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserProfile(userId).then((res) => setUser(res.data));
  }, []);

  return user ? (
    <div className={styles.header}>
      <img className={styles["avatar"]} src={defaultUserAvatar} alt="" />
      <div className={styles.info}>
        <span className={styles.user_name}>Nhat Bao</span>
        <div className={styles.time_box}>
          <img className={styles["clock"]} src={clockLogo} alt="" />
          <span className={styles.time}>{timeFromNow(createdAt)}</span>
        </div>
      </div>
    </div>
  ) : (
    "Loading"
  );
}
