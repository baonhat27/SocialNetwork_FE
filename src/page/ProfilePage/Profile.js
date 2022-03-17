import React from 'react'
import styles from "./ProfilePage.module.css";
import PostCreateForm from "../../containers/PostCreateForm/index";
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
                        <p className={styles.infomationCol_line}>
                            <i class={"fa-solid fa-envelope"+" "+styles.icon}></i>Email: {props.user.email} 
                        </p>
                        <p className={styles.infomationCol_line}>
                            <i class={"fa-solid fa-cake-candles"+" "+styles.icon}></i>Ngày sinh: {new Date(props.user.dateOfBirth).getDate()+"/"+(new Date(props.user.dateOfBirth).getMonth()+1)+"/"+new Date(props.user.dateOfBirth).getFullYear()} 
                        </p>
                        <p className={styles.infomationCol_line}>
                            <i class={"fa-solid fa-mars-and-venus"+" "+styles.icon}></i>Giới tính: {props.user.gender?"Nữ":"Nam"} 
                        </p>
                        <p className={styles.infomationCol_line}>
                            <i class={"fa-solid fa-clock"+" "+styles.icon}></i>Ngày tham gia: {new Date(props.user.createdAt).getDate()+"/"+(new Date(props.user.createdAt).getMonth()+1)+"/"+new Date(props.user.createdAt).getFullYear()} 
                        </p>
                        <button className={styles.infomationCol_button} onClick={function(){
                            props.setSettingShow(true);
                        }}>
                            Chỉnh sửa thông tin cá nhân 
                        </button>
                        <div className={props.settingShow?"background_dark show":"background_dark"}>
                            <div className={styles.profileSetting}>
                                <div className={styles.profileSetting_header}>
                                    <h2 style={{fontWeight:"bold"}}>
                                        Chỉnh sửa chi tiết
                                    </h2>
                                    <div className={styles.profileSetting_closeButton} onClick={function(){
                                        props.setSettingShow(false);
                                    }}>
                                        <i class="fa-regular fa-circle-xmark"></i>
                                    </div>
                                </div>
                                <div className={styles.profileSetting_body}>
                                    <h3>Chỉnh sửa phần giới thiệu</h3>  
                                    <p className={styles.profilePage_describes}>Chi tiết bạn chọn sẽ hiển thị công khai.</p>
                                    <div className={styles.profileSetting_name}>
                                        <div className={styles.profileSetting_firstName+" "+styles.inputBox}>
                                            
                                            <input placeholder="First name" onChange={props.handleChangeFirstName} className={styles.input} value={props.firstName}> 
                                            </input>
                                        </div>
                                        <div className={styles.profileSetting_lastName+" "+styles.inputBox}>
                                            
                                            <input placeholder="Last name" value={props.lastName} onChange={props.handleChangeLastName} className={styles.input}>
                                            </input>
                                        </div>
                                        
                                    </div>
                                    <div className={styles.profileSetting_email+" "+styles.inputBox}>
                                            <input placeholder="Email" value={props.email} onChange={props.handleChangeEmail} className={styles.input}>
                                            </input>
                                    </div>
                                    <div className={styles.profileSetting_dateOfBirth}>
                                        <p className={styles.profileSetting_dateOfBirth_name}>Date of birth</p>
                                        <select className={styles.profileSetting_dateOfBirth_component} onChange={props.handleChangeDay}>
                                            {[...Array(new Date(props.selectedYear, props.selectedMon, 0).getDate())].map((_, index) => (
                                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                        <select className={styles.profileSetting_dateOfBirth_component} onChange={props.handleChangeMon}>
                                            {[...Array(12)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                        <select className={styles.profileSetting_dateOfBirth_component} onChange={props.handleChangeYear}>
                                            {
                                            [...Array(100)].map((_, index) => (
                                                <option key={index + 1923} value={index + 1923}>{index + 1923}</option>
                                            ))}
                                        </select>
                                        <p className={styles.profileSetting_dateOfBirth_gendername}>Giới tính</p>
                                        <select value={props.gender} onChange={props.handleChangeGender} className={styles.profileSetting_dateOfBirth_gender}>
                                            <option value={0}>Nam</option>
                                            <option value={1}>Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={props.putUserInfo} className={styles.profileSetting_saveButton}>
                                    Lưu
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.postList}>
                        <div className={styles.status}>
                            <PostCreateForm/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfilePageComponent;
