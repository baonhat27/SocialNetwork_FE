import React from 'react'
import styles from './index.module.css';
function UpdateAvatarFormComponent(props) {
    return (   
        <div className={props.selectedAvatarForm?"background_dark show":"background_dark"}>
            <div className={styles.form}>
                <div className={styles.form_header}>
                    <h1>Cập nhật ảnh đại diện</h1>
                    <i onClick={function(){
                        props.setSelectedAvatarForm(false);
                    }} class={"fa-regular fa-circle-xmark "+styles.icon}></i>
                </div>
            </div>
        </div>
    )
}

export default UpdateAvatarFormComponent
