import { useState } from "react";
import { timeFromNow } from "../../../../shared/utils";
import { Link, useHistory } from "react-router-dom";
import { readNotification } from "../../../../shared/service";
import styles from "./Notification.module.css";
import { useDispatch } from "react-redux";
import { readNoti } from "../../../../shared/store/redux/actions";

export default function NotificationItem({ noti, showNoti }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const clickNotification = (notificationId, targetId) => async () => {
    if (!noti.isRead) {
      const res = await readNotification(notificationId);
      if (res.success) {
        dispatch(readNoti(noti._id));
      }
    }
    history.push(`/posts/${targetId}`);
    showNoti();
  };

  return (
    <div
      key={noti._id}
      className={styles.noti_item}
      onClick={clickNotification(noti._id, noti.targetId)}
    >
      <div className={styles.img_wrap}>
        <img className={styles.avatar} src={noti.createdBy.avatar} alt="" />
      </div>
      <div className={styles.text_box}>
        <p className={styles.text}>
          <span
            className={styles.username}
          >{`${noti.createdBy.firstName}  ${noti.createdBy.lastName}`}</span>
          {"  "}
          <span>
            {noti.action}d a {noti.target.toLowerCase()}
          </span>
          {"  "}
        </p>
        <p className={styles.time}>{timeFromNow(noti.createdAt)}</p>
      </div>
      <div className={`${styles.dot} ${!noti.isRead && styles.blue_dot}`}></div>
    </div>
  );
}
