import React from "react";
import styles from "./index.module.css";
import Header from "../../../containers/Header";
import ChatBoxContainer from "../../../containers/ChatBox";
function MessagePageComponent(props) {
  return (
    <div className={styles.messagePage}>
      <Header />
      <div className={styles.body}>
        <div className={styles.body_listChatSession}>
          <div className={styles.listChatSession_header}>
            <h1 style={{ fontWeight: "bold", marginLeft: "10px" }}>Chat</h1>
            <div className={styles.searchPeopleBox}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                className={styles.searchPeople}
                onChange={props.changeSearchKey}
              ></input>
            </div>
            {props.userList.length ? (
              <div className={styles.searchResult}>
                {props.userList.map((user, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.resultComponent}
                      onClick={function () {
                        props.createOrJoinSession(
                          user.firstName + " " + user.lastName,
                          user._id
                        );
                        props.setUserList([]);
                      }}
                    >
                      <div className={styles.resultComponent_avatarBox}>
                        <img
                          src={user.avatar}
                          className={styles.resultComponent_avatar}
                        />
                      </div>
                      <p className={styles.resultComponent_name}>
                        {user.firstName + " " + user.lastName}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
          {props.chooseSession ? (
            <div className={styles.listChatSession_body}>
              {props.sessionList.map((session) => {
                return (
                  <div
                    key={session._id}
                    className={
                      props.chooseSession._id == session._id
                        ? styles.chatSession + " " + styles.choose
                        : styles.chatSession
                    }
                    onClick={function () {
                      props.setChooseSession(session);
                    }}
                  >
                    <div className={styles.avatarBox}>
                      <img
                        src={session.userId.avatar}
                        className={styles.avatar}
                      />
                    </div>
                    <div className={styles.chatSession_rightBox}>
                      <p className={styles.sessionName}>
                        {session.userId.firstName +
                          " " +
                          session.userId.lastName}
                      </p>
                      <p className={styles.message}>
                        {session.isSeen ? (
                          session.lastMessage.content
                        ) : (
                          <div
                            style={{
                              fontWeight: "500",
                              color: "black",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {session.lastMessage.content}
                            <div className={styles.blue_dot}></div>
                          </div>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.listChatSession_body}></div>
          )}
          <div className={styles.listChatSession_footer}></div>
        </div>
        <div className={styles.body_chatSession}>
          {props.chooseSession && props.user && (
            <ChatBoxContainer
              handleSeenMessage={props.handleSeenMessage}
              session={props.chooseSession}
              user={props.user}
            />
          )}
        </div>
        <div className={styles.body_infoChatSession}>
          <h2 style={{ color: "gray" }}>Đang hoạt động</h2>
          {props.userOnlineList.map((userOnline, index) => {
            if (userOnline._id != localStorage.getItem("userId")) {
              return (
                <div
                  key={index}
                  className={styles.userOnlineBox}
                  onClick={function () {
                    props.createOrJoinSession(
                      userOnline.firstName + " " + userOnline.lastName,
                      userOnline._id
                    );
                  }}
                >
                  <div className={styles.userOnline_Box}>
                    <div className={styles.userOnlineBox_avatarBox}>
                      <img
                        src={userOnline.avatar}
                        className={styles.userOnlineBox_avatar}
                      />
                    </div>
                    <div className={styles.status}></div>
                  </div>
                  <p className={styles.userOnline_name}>
                    {userOnline.firstName + " " + userOnline.lastName}
                  </p>
                </div>
              );
            }
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}

export default MessagePageComponent;
