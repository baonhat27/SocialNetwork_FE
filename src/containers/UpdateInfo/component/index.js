import React from 'react'
import styles from './index.module.css';
function UpdateInfoComponent(props) {
    return (
        <div className={props.settingShow?"background_dark show":"background_dark"}>
                            <div className={styles.profileSetting}>
                                <div className={styles.profileSetting_header}>
                                    <h2 style={{fontWeight:"bold"}}>
                                        Chỉnh sửa chi tiết
                                    </h2>
                                    <div className={styles.profileSetting_closeButton} onClick={function(){
                                        props.setSettingShow(false);
                                    }}>
                                        <i className="fa-regular fa-circle-xmark"></i>
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
    )
}

export default UpdateInfoComponent
