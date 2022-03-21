import React, { useState } from "react";
import _Notification from "./Notification";
import styles from "./Notification.module.css";

const Notification = (props) => {
  return (
      <>
        <i
            className={"fa-solid fa-bell "+styles.icon}
            onClick= {props.handleShowNoti}
        >
        </i>
            <_Notification showNoti = {props.showNoti} />
      </>

  );
};

export default Notification;
