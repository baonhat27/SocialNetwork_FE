import { useState } from "react";
import { timeFromNow } from "../../../../shared/utils";
import { Link, useHistory } from "react-router-dom";
import { readNotification } from "../../../../shared/service";
import styles from "./Notification.module.css";
import defaultUserAvatar from "../../../../shared/image/user.png";

export default function NotificationItem({ noti, readNoti, showNoti }) {
  const history = useHistory();
  const activity = noti.activity;
  const [isRead, setIsRead] = useState(() => noti.isRead);
  const clickNotification = async () => {
    if (!noti.isRead) {
      const res = await readNotification(noti._id);
      if (res.success) {
        readNoti(noti);
      }
    }

    switch (activity.targetModel) {
      case "Post":
        history.push(`/posts/${activity.target._id}`);
        break;
      case "Comment":
        history.push(`/posts/${activity.target.postId}`);
        break;
      case "Reaction":
        history.push(`/posts/${activity.target.postId}`);
        break;
      default:
        console.log("targetModel error");
    }

    showNoti();
  };

  return (
    <div
      key={noti._id}
      className={styles.noti_item}
      onClick={clickNotification}
    >
      <div className={styles.img_wrap}>
        <img
          className={styles.avatar}
          src={
            !activity.createdBy ||
            activity.createdBy.avatar === "no information"
              ? defaultUserAvatar
              : activity.createdBy.avatar
          }
          alt=""
        />
      </div>
      <div className={styles.text_box}>
        <p className={styles.text}>
          <span
            className={styles.username}
          >{`${activity.createdBy.firstName}  ${activity.createdBy.lastName}`}</span>
          {"  "}
          <span>
            {activity.action}d a {activity.targetModel.toLowerCase()}
          </span>
          {"  "}
        </p>
        <p className={styles.time}>{timeFromNow(activity.createdAt)}</p>
      </div>
      <div className={`${styles.dot} ${!isRead && styles.blue_dot}`}></div>
    </div>
  );
}
