import React from 'react'
import styles from './index.module.css';
import withUploadImage from '../../UploadImage';
function UpdateAvatarFormComponent(props) {
    return (   
        <div className={props.selectedAvatarForm?"background_dark show":"background_dark"}>
            <div className={styles.form}>
                <div className={styles.form_header}>
                    <h1>Cập nhật ảnh đại diện</h1>
                    <i onClick={function(){
                        props.setSelectedAvatarForm(false);
                    }} className={"fa-regular fa-circle-xmark "+styles.icon}></i>
                </div>
                <div className={styles.form_body}>
                    <div className={styles.avatar_box}>
                        <img src={props.images[props.images.length-1]||props.avatar} className={styles.image}>
                        </img>
                    </div>
                    <button className={styles.button+" "+styles.chooseImage} onClick={props.upload}>
                        Chọn ảnh
                    </button>
                    <button className={styles.button+" "+styles.save} onClick={function(){
                        props.saveImage(props.images)
                    }}>
                        Lưu
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default withUploadImage(UpdateAvatarFormComponent);
