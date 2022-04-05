import React, { useEffect, useRef } from "react";
import withUploadImage from "../../UploadImage";
import styles from "./index.module.css";
import ImageShowContainer from "../../ImageShow";

function ChatBoxComponent(props) {
  const chatBoxBodyRef = useRef(null);
  const messageLastRef = useRef(null);

  const checkSeenMessage = () => {
    const messageLast = messageLastRef.current;
    const rect = messageLast.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    ) {
      props.seenMessage();
    }
  };

  const handleScroll = () => {
    checkSeenMessage();
  };

  const scrollLastMessage = () => {
    const messageLast = messageLastRef.current;
    messageLast.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center",
    });
  };

  return (
    <div className={styles.chatBox}>
      <div className={styles.chatBox_header}>
        <div className={styles.headers_avatarBox}>
          <img
            src={props.session.userId.avatar ? props.session.userId.avatar : ""}
            className={styles.headers_avatar}
            alt=""
          />
        </div>
        <div className={styles.headers_info}>
          <p className={styles.headers_name}>
            {props.sessionName=="noname"?props.session.userId.firstName +
              " " +
              props.session.userId.lastName:props.sessionName}
          </p>
          <p className={styles.headers_timeActive}>Hoạt động 1h trước</p>
        </div>
        <div className={styles.headers_buttonList}>
          <i className={"fa-solid fa-phone "+styles.headers_button}></i>
          <i className={"fa-solid fa-video "+styles.headers_button}></i>
          <i className={"fa-solid fa-ellipsis-vertical "+styles.headers_button}
          onClick={
            function(){
              props.setHandleSessionName(true)
            }
          }></i>
        </div>
          {
            props.handleSessionName? <div className="background_dark show">
            <div className={styles.handleSessionName}>
                <div className={styles.handleSessionName_header}>
                  <h1 style={{fontWeight:"bold"}}>Đổi tên đoạn chat</h1>
                  <i className={"fa-regular fa-circle-xmark "+styles.handleSessionName_header_icon}
                  onClick={
                    function(){
                      props.setHandleSessionName(false)
                    }
                  }></i>
                </div>
                <div className={styles.handleSessionName_body}>
                    <p>Mọi người đều biết khi tên nhóm chat thay đổi.</p>
                    <div className={styles.inputSessionNameBox}>
                      <p className={styles.inputSessionName_headding}>Tên đoạn chat</p>
                      <input value={props.sessionNameInput} onChange={
                        function(item){
                          props.setSessionNameInput(item.target.value);
                        }
                      } className={styles.inputSessionName}>

                      </input>

                    </div>
                    <div className={styles.inputSessionName_footer}>
                      <div style={{color:"#0084ff"}} className={styles.inputSessionName_footer_click} onClick={
                        function(){
                          props.setHandleSessionName(false)
                        }
                      }>
                        Hủy
                      </div>
                      <div className={styles.inputSessionName_footer_click} onClick={props.saveSessionName}>
                        Lưu
                      </div>
                    </div>
                </div>
            </div>
          </div>:<></>
          }
      </div>
      <div
        ref={chatBoxBodyRef}
        onScroll={handleScroll}
        className={styles.chatBox_body}
      >
        {props.messageList.map((message, index) => {
          return (
            <div
              key={index}
              className={
                message.createdBy._id != localStorage.getItem("userId")
                  ? styles.messageShow
                  : styles.messageShow + " " + styles.me
              }
            >
              <div
                className={
                  message.createdBy._id != localStorage.getItem("userId")
                    ? styles.messageShow_avatarBox
                    : styles.messageShow_avatarBox + " " + styles.me
                }
              >
                <img
                  className={styles.messageShow_avatar}
                  src={message.createdBy.avatar}
                />
              </div>
              <div
                className={
                  message.createdBy._id != localStorage.getItem("userId")
                    ? styles.messageShow_content
                    : styles.messageShow_content + " " + styles.me
                }
              >
                <div
                  className={
                    message.createdBy._id != localStorage.getItem("userId")
                      ? styles.message
                      : styles.message + " " + styles.me
                  }
                >
                  <div
                    className={
                      message.createdBy._id != localStorage.getItem("userId")
                        ? styles.message_contentBox
                        : styles.message_contentBox + " " + styles.me
                    }
                  >
                    <p className={styles.message_content}>{message.content}</p>
                  </div>
                  {message.image.length > 0 ? (
                    <div
                      className={
                        message.createdBy._id != localStorage.getItem("userId")
                          ? styles.message_imageList
                          : styles.message_imageList + " " + styles.me
                      }
                      onClick={function () {
                        props.setImageShow(1);
                      }}
                    >
                      {message.image.map((image, index) => {
                        if (message.image.length == 1) {
                          return (
                            <img
                              key={index}
                              className={styles.message_image}
                              src={image}
                            />
                          );
                        } else if (message.image.length == 2) {
                          return (
                            <img
                              key={index}
                              className={styles.message_image2}
                              src={image}
                            />
                          );
                        } else {
                          return (
                            <img
                              key={index}
                              className={styles.message_image3}
                              src={image}
                            />
                          );
                        }
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                  {props.imageShow != -1 ? (
                    <ImageShowContainer
                      setImageShow={props.setImageShow}
                      listImage={message.image}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <span ref={messageLastRef}></span>
      </div>
      <div className={styles.chatBox_footer}>
        <i
          className={"fa-solid fa-image " + styles.icon}
          onClick={props.upload}
        ></i>
        <div
          className={
            props.images.length > 0
              ? styles.messageInputBox + " " + styles.image
              : styles.messageInputBox
          }
        >
          <div className={styles.chatBox_footer_imageList}>
            {props.images.map((image, index) => {
              return (
                <div key={index} className={styles.chatBox_footer_imageBox}>
                  <i
                    className={"fa-solid fa-xmark " + styles.iconImage}
                    onClick={function () {
                      props.setImages(
                        props.images.filter((imagess, chiso) => chiso != index)
                      );
                    }}
                  ></i>
                  <img
                    src={image}
                    key={index}
                    className={styles.chatBox_footer_image}
                  />
                </div>
              );
            })}
          </div>
          <input
            onKeyDown={function (e) {
              if (e.key == "Enter") {
                props.sendMessage(props.images, props.clearImage);
                // scrollLastMessage();
              }
            }}
            value={props.message}
            className={styles.messageInput}
            onChange={props.changeMessageInput}
            placeholder="Nhập tin nhắn"
          ></input>
        </div>
        <i
          className={"fa-solid fa-paper-plane " + styles.icon}
          onClick={function () {
            props.sendMessage(props.images, props.clearImage);
            // scrollLastMessage();
          }}
        ></i>
      </div>
    </div>
  );
}
export default withUploadImage(ChatBoxComponent);
