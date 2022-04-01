import React from 'react'
import styles from "./index.module.css";
import Header from "../../../containers/Header";
import ChatBoxContainer from '../../../containers/ChatBox';
function MessagePageComponent(props) {
    return (
        <div className={styles.messagePage}>
            <Header/>
            <div className={styles.body}>
                <div className={styles.body_listChatSession}>
                    <div className={styles.listChatSession_header}>
                        <h1 style={{fontWeight:"bold",marginLeft:"10px"}}>Chat</h1>
                        <div className={styles.searchPeopleBox}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input className={styles.searchPeople} onChange={props.changeSearchKey}>
                            </input>
                        </div>
                        {props.userList.length? <div className={styles.searchResult}>
                                {
                                    props.userList.map(user=>{
                                        return <div className={styles.resultComponent} onClick={function(){
                                            props.createOrJoinSession(user.firstName+" "+user.lastName,user._id);
                                            props.setUserList([]);
                                            
                                        }}>
                                            <div className={styles.resultComponent_avatarBox}>
                                                <img src={user.avatar} className={styles.resultComponent_avatar}/>
                                            </div>
                                            <p className={styles.resultComponent_name}>
                                                {user.firstName+" "+user.lastName}
                                            </p>
                                        </div>
                                    })
                                }
                            </div>:<></>}
                    </div>
                    {
                        props.chooseSession? <div className={styles.listChatSession_body}>
                        {
                            props.sessionList.map(session=>{
                                return <div className={props.chooseSession._id==(session._id)?styles.chatSession+" "+styles.choose:styles.chatSession} onClick={function(){
                                    props.setChooseSession(session);
                                }}>
                                            <div className={styles.avatarBox}>
                                                <img src={session.userId.avatar} className={styles.avatar}/>
                                            </div>
                                            <div className={styles.chatSession_rightBox}>
                                            <p className={styles.sessionName}>
                                                {
                                                    session.userId.firstName+" "+session.userId.lastName
                                                }
                                            </p>
                                            <p className={styles.message}>
                                                content
                                            </p>
                                        </div>
                                    </div>
                            })
                        }
                    </div>:<div className={styles.listChatSession_body}></div>
                    }
                    <div className={styles.listChatSession_footer}>

                    </div>
                </div>
                <div className={styles.body_chatSession}>
                        {props.chooseSession && <ChatBoxContainer session={props.chooseSession} user={props.user}/>}
                </div>
                <div className={styles.body_infoChatSession}>

                </div>
            </div>
        </div>
    )
}

export default MessagePageComponent
