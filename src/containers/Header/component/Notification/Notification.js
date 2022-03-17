import styles from "./Notification.module.css"
import React from 'react';

const _Notification = (props) => {
    return (
        <div className={  props.showNoti ? styles.noti : styles.hide }>
            <div className={styles.noti_header}>Notification header</div>
            <div className={styles.noti_item}>
                Notification Test !!!
            </div>
            <div className={styles.noti_item}>
                Notification Test !!!
            </div>
            <div className={styles.noti_item}>
                Notification Test !!!
            </div>
            <div className={styles.noti_item}>
                Notification Test !!!
            </div>
        </div>
    );
};

export default _Notification;