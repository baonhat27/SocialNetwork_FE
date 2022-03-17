import React, { useState } from "react";
import _Notification from "./Notification";

const Notification = (props) => {
  return (
      <>
        <i
            className="fa-solid fa-bell"
            style={{ color: "white", fontSize: 20, marginRight: 20 }}
            onClick= {props.handleShowNoti}
        >
        </i>
            <div className="noti-count">5</div>
            <_Notification showNoti = {props.showNoti} />
      </>

  );
};

export default Notification;
