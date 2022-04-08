import React, { useEffect, useState, useRef } from "react";
import styles from "./Notification.module.css";
import ListNotification from "./ListNotification";
import {
  getNotification,
  listenNotification,
} from "../../../../shared/service";

export default function Notification(props) {
  const [showNoti, setShowNoti] = useState(false);
  const [total, setTotal] = useState(0);
  const count = useRef(0);
  const more = useRef(false);
  const [notifications, setNotifications] = useState([]);
  const lastReceiveAt = useRef();

  const fetch = async () => {
    more.current = false;
    const res = await getNotification(count.current);

    if (res.success) {
      setNotifications((old) => {
        return [...old, ...res.data.results];
      });
      setTotal(res.data.total);
      more.current = count.current + res.data.results.length < res.data.total;
      count.current += res.data.results.length;
      lastReceiveAt.current = res.data.results[0].createdAt;
    }
  };

  const showMore = async () => {
    more.current && (await fetch());
  };

  const readNoti = (noti) => {
    setNotifications(
      notifications.map((n) => {
        if (n._id === noti._id) n.isRead = true;
        return n;
      })
    );
  };

  const handleShowNoti = () => {
    setShowNoti(!showNoti);
  };

  useEffect(() => {
    fetch();

    listenNotification("open", async (e) => {
      if (lastReceiveAt) {
        const res = await getNotification(0, lastReceiveAt.current);
        if (res.success) {
          setNotifications((old) => [...res.data.results, ...old]);
        }
      }
    });

    listenNotification("notification", (e) => {
      const data = JSON.parse(e.data);
      // console.log(data);
      if (data) {
        setNotifications((old) => [data, ...old]);
        count.current += 1;
        setTotal((old) => old + 1);
        lastReceiveAt.current = data.createdAt;
      }
    });

    return () => {};
  }, []);

  const totalUnread = notifications.reduce((prev, curr) => {
    return prev + (curr.isRead ? 0 : 1);
  }, 0);

  return (
    <>
      <div className={styles.icon_box}>
        <i
          className={"fa-solid fa-bell " + styles.icon}
          onClick={handleShowNoti}
        ></i>
        {totalUnread ? <i className={styles.red_text}>{totalUnread}</i> : ""}
      </div>
      {showNoti && (
        <ListNotification
          notifications={notifications}
          showNoti={handleShowNoti}
          showMore={showMore}
          readNoti={readNoti}
        />
      )}
    </>
  );
}
