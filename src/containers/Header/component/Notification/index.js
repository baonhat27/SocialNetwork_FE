import React, { useEffect, useState, useRef } from "react";
import styles from "./Notification.module.css";
import ListNotification from "./ListNotification";
import {
  getNotification,
  listenNotification,
} from "../../../../shared/service";
import { useDispatch, useSelector } from "react-redux";
import { addNoti, pushNoti } from "../../../../shared/store/redux/actions";

async function sleep(time) {
  return new Promise((res, rej) => {
    setTimeout(res, time);
  });
}

export default function Notification(props) {
  const [showNoti, setShowNoti] = useState(false);
  const [total, setTotal] = useState(0);
  const count = useRef(0);
  const more = useRef(false);

  const listNoti = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const fetch = async () => {
    more.current = false;
    const res = await getNotification(count.current);
    if (res.success) {
      dispatch(pushNoti(res.data.results));
      setTotal(res.data.total);
      more.current = count.current + res.data.results.length < res.data.total;
      count.current += res.data.results.length;
    }
  };

  const showMore = async () => {
    more.current && (await fetch());
  };

  const handleShowNoti = () => {
    setShowNoti(!showNoti);
  };

  useEffect(() => {
    fetch();

    listenNotification((e) => {
      const data = JSON.parse(e.data);
      if (data) {
        dispatch(addNoti(data));
        count.current += 1;
        setTotal((old) => old + 1);
      }
    });

    return () => {};
  }, []);

  const totalUnread = listNoti.reduce((prev, curr) => {
    return prev + (curr.isRead ? 0 : 1);
  }, 0);

  return (
    <>
      <div className={styles.icon_box}>
        <i
          className={"fa-solid fa-bell " + styles.icon}
          onClick={handleShowNoti}
        ></i>
        {totalUnread ? <i className={styles.red_text}>{""}</i> : ""}
      </div>
      {showNoti && (
        <ListNotification showNoti={handleShowNoti} showMore={showMore} />
      )}
    </>
  );
}
