import React, { useEffect, useState, useRef } from "react";
import styles from "./Notification.module.css";
import NotificationItem from "./NotificationItem";

function ListNotification({ notifications, showNoti, showMore, readNoti }) {
  const notiBox = useRef(null);
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
      {notifications.map((noti) => {
        return (
          <NotificationItem
            key={noti._id}
            noti={noti}
            showNoti={showNoti}
            readNoti={readNoti}
          />
        );
      })}
    </div>
  );
}

export default ListNotification;
