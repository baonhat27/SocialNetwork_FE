import React from "react";
import styles from "./ProfilePage.module.css";
import Header from "../../containers/Header";
import UpdateAvatarFormContainer from "../../containers/UpdateAvatarForm";
import PostGroup from "../../containers/PostGroup";
import UpdateInfoContainer from "../../containers/UpdateInfo";
function ProfilePageComponent(props) {
  console.log(props.user._id);
  console.log(props.user);
  return (
    <div className={styles.profilePage}>
      <Header />
      <div className={styles.avatarBackground}>
        <div className={styles.avatarBox}>
          <img
            src={
              props.user.avatar !== "no information"
                ? props.user.avatar
                : "https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
            }
            className={styles.avatar}
            alt="avatar"
          ></img>
          {!props.friend ? (
            <i
              onClick={function () {
                props.setSelectedAvatarForm(true);
              }}
              class={"fa-solid fa-camera " + styles.icon_camera}
            ></i>
          ) : (
            <></>
          )}
          <p className={styles.name}>
            {props.user.firstName + " " + props.user.lastName}
          </p>
        </div>
      </div>
      {!props.friend ? (
        <UpdateAvatarFormContainer
          selectedAvatarForm={props.selectedAvatarForm}
          setSelectedAvatarForm={props.setSelectedAvatarForm}
          avatar={props.user.avatar}
        />
      ) : (
        <></>
      )}
      <div className={styles.body}>
        <div></div>
        <div className={styles.bodyCol}>
          <div className={styles.infomationCol}>
            <h2>Giới thiệu</h2>
            <p className={styles.infomationCol_line}>
              <i class={"fa-solid fa-envelope" + " " + styles.icon}></i>Email:{" "}
              {props.user.email}
            </p>
            <p className={styles.infomationCol_line}>
              <i class={"fa-solid fa-cake-candles" + " " + styles.icon}></i>Ngày
              sinh:{" "}
              {new Date(props.user.dateOfBirth).getDate() +
                "/" +
                (new Date(props.user.dateOfBirth).getMonth() + 1) +
                "/" +
                new Date(props.user.dateOfBirth).getFullYear()}
            </p>
            <p className={styles.infomationCol_line}>
              <i class={"fa-solid fa-mars-and-venus" + " " + styles.icon}></i>
              Giới tính: {props.user.gender ? "Nữ" : "Nam"}
            </p>
            <p className={styles.infomationCol_line}>
              <i class={"fa-solid fa-clock" + " " + styles.icon}></i>Ngày tham
              gia:{" "}
              {new Date(props.user.createdAt).getDate() +
                "/" +
                (new Date(props.user.createdAt).getMonth() + 1) +
                "/" +
                new Date(props.user.createdAt).getFullYear()}
            </p>
            {!props.friend ? (
              <button
                className={styles.infomationCol_button}
                onClick={function () {
                  props.setSettingShow(true);
                }}
              >
                Chỉnh sửa thông tin cá nhân
              </button>
            ) : (
              <></>
            )}
            {!props.friend ? (
              <UpdateInfoContainer
                settingShow={props.settingShow}
                setSettingShow={props.setSettingShow}
                user={props.user}
              />
            ) : (
              <></>
            )}
          </div>
          <div className={styles.postList}>
            <div className={styles.status}>
              <PostGroup createdBy={props.user._id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePageComponent;
