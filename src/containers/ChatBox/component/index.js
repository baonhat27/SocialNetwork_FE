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
                        return <p>
                            {
                                message
                            }
                        </p>
                    })
                }
                    <input onChange={props.changeMessageInput}>

                    </input>
                    <span onClick={props.sendMessage}>
                        Gửi
                    </span>
            </div>
            <div className={styles.chatBox_footer}>

            </div>
        </div>
    )
}

export default ChatBoxComponent
