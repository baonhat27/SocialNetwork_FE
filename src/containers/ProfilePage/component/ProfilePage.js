import React from 'react'
import styles from "./ProfilePage.module.css";
function ProfilePageComponent(props) {
    return (
        <div className={styles.profilePage}>
            <div className={styles.avatarBackground}>
                
            </div>
            <div className={styles.navbar}>
                <div className={styles.avatarBox}>
                    <img src={props.user.avatar} className={styles.avatar} alt='avatar'></img>
                    <p className={styles.name}>
                        {props.user.firstName+" "+props.user.lastName}
                    </p>
                </div>
                
            </div>
            <div className={styles.body}>
                <div className={styles.bodyCol}>
                    <div className={styles.infomationCol}>
                        <h2>Giới thiệu</h2>
                        <p>
                        Email: {props.user.email} 
                        </p>
                    </div>
                    <div className={styles.postList}>
                        <div className={styles.status}>
                            <div className={styles.status_write}>
                                <img src={props.user.avatar} className={styles.status_avatar}>

                                </img>
                                <button className={styles.status_createNewPost}>
                                    <span style={{position:"relative",right:"170px",fontSize:"20px",color:"gray"}}>Bạn đang nghĩ gì?</span>
                                </button>
                            </div>
                            <div className={styles.status_buttonList}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePageComponent;
