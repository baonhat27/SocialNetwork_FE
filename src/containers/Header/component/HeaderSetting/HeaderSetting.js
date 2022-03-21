import React from 'react'
import styles from "./HeaderSetting.module.css";
import {Link} from "react-router-dom";
function HeaderSettingComponent(props) {
    return (
        <div className={styles.headerSetting}>
            <div className={styles.setting_button}>
                <img src={props.user.avatar} className={styles.avatar}>
                </img>
                <Link to="/profile" className={styles.name}>
                    <h2 className={styles.user_name}>{props.user.firstName+" "+props.user.lastName}</h2>
                    <span className={styles.text}>Xem trang cá nhân của bạn</span>
                </Link>
                
            </div>
            <div className={styles.line}>

            </div>
            <div className={styles.setting_button}>
                <i class={"fa-solid fa-message "+styles.icon}></i>
                <div className={styles.name}>
                    <h2 style={{fontSize:"19px"}} className={styles.user_name}>Đóng góp ý kiến</h2>
                    <span className={styles.text}>Hãy chung tay cải thiện Telio</span>
                </div>
            </div>
            <div className={styles.line}>

            </div>
            <div className={styles.setting_button}>
                <i class={"fa-solid fa-gear "+styles.icon}></i>
                <div className={styles.name}>
                    <h3 className={styles.settingName}>Cài đặt {"&"} quyền riêng tư</h3>
                    <i class={"fa-solid fa-angle-right "+styles.icon_right}></i>
                </div>
            </div>
            <div className={styles.setting_button}>
                <i class={"fa-solid fa-circle-question "+styles.icon}></i>
                <div className={styles.name}>
                    <h3 className={styles.settingName}>Trợ giúp {"&"} hỗ trợ</h3>
                    <i class={"fa-solid fa-angle-right "+styles.icon_right}></i>
                </div>
            </div>
            <div className={styles.setting_button} onClick={props.logout}>
                <i class={"fa-solid fa-right-from-bracket "+styles.icon}></i>
                <div className={styles.name}>
                    <h3 className={styles.settingName}>Đăng xuất</h3>
                    <i class={"fa-solid fa-angle-right "+styles.icon_right}></i>
                </div>
            </div>
        </div>
    )
}

export default HeaderSettingComponent
