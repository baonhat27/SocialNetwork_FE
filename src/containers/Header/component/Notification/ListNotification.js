import React, { useEffect, useRef } from "react";
import styles from "./Notification.module.css";
import { useSelector } from "react-redux";
import NotificationItem from "./NotificationItem";

function ListNotification({ showNoti, showMore }) {
  const notiBox = useRef(null);

  const notifications = useSelector((state) => state.notifications);

  useEffect(() => {
    const node = notiBox.current;

    node &&
      node.addEventListener("scroll", (e) => {
        if (node.scrollHeight - node.scrollTop <= node.clientHeight + 10) {
          showMore();
        }
      });
  }, []);

  return (
    <div ref={notiBox} className={styles.noti}>
      {notifications.map((noti) => (
        <NotificationItem key={noti._id} noti={noti} showNoti={showNoti} />
      ))}
    </div>
  );
}

export default ListNotification;
