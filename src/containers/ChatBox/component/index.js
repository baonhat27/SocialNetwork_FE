import React from 'react'
import styles from "./index.module.css";
function ChatBoxComponent(props) {
    return (
        <div className={styles.chatBox}>
            <div className={styles.chatBox_header}>
                <div className={styles.headers_avatarBox}>
                    <img src={props.session.userId.avatar?props.session.userId.avatar:""} className={styles.headers_avatar}/>
                </div>
                <div className={styles.headers_info}>
                    <p className={styles.headers_name}>
                        {
                            props.session.userId.firstName+" "+props.session.userId.lastName
                        }
                    </p>
                    <p className={styles.headers_timeActive}>
                        Hoạt động 1h trước
                    </p>
                </div>
            </div>
            <div className={styles.chatBox_body}>
                {
                    props.messageList.map(message=>{
                        return <div className={message.user._id!=localStorage.getItem("userId")?styles.messageShow:styles.messageShow+" "+styles.me}>
                                <div className={message.user._id!=localStorage.getItem("userId")?styles.messageShow_avatarBox:styles.messageShow_avatarBox+" "+styles.me}>
                                    <img className={styles.messageShow_avatar} src={message.user.avatar}/>
                                </div>
                                <div className={styles.messageShow_content}>
                                    {
                                        message.user._id==localStorage.getItem("userId")?<div style={{flex:"1"}}>
                                        </div>:<></>
                                    }
                                    <p className={styles.message_content}>
                                        {
                                            message.content
                                        }
                                    </p>
                                    {
                                        message.user._id!=localStorage.getItem("userId")?<div style={{flex:"1"}}>
                                        </div>:<></>
                                    }
                                </div>
                            </div>
                    })
                }
                    
            </div>
            <div className={styles.chatBox_footer}>
                <i className={"fa-solid fa-image "+styles.icon}></i>
                <input value={props.message} className={styles.messageInput} onChange={props.changeMessageInput} placeholder="Nhập tin nhắn">

                </input>
                <i className={"fa-solid fa-paper-plane "+styles.icon} onClick={props.sendMessage}></i>
            </div>
        </div>
    )
}

export default ChatBoxComponent
