import React, { useEffect, useState } from "react";
import MessagePageComponent from "./component";
import { SERVER } from "../../shared/store/env";
import { useSelector } from "react-redux";
import { getListSession, joinTheSession, searchUserService } from "./service";
import { useDispatch } from "react-redux";
import getUserInfo from "../../shared/service/getUserInfo";
import { checkToken } from "../../shared/service/tokenCheck";
import lodash from "lodash";

function MessagePageContainer(props) {
  const [mess, setMess] = useState([]);
  const [sessionList, setSessionList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userOnlineList, setUserOnlineList] = useState([]);
  const [chooseSession, setChooseSession] = useState();
  const [id, setId] = useState();
  const io = useSelector((state) => state.io);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => {
    checkToken(getUserInfo(dispatch), dispatch);
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    //get list session to render
    getListSession()
      .then((response) => response.data)
      .then((data) => {
        setSessionList(
          data.data.map((session) => {
            for (let i = 0; i < session.userLastSeen.length; i++) {
              if (
                session.userLastSeen[i].user === localStorage.getItem("userId")
              ) {
                session.isSeen = session.lastMessage
                  ? session.userLastSeen[i].seenAt >
                    session.lastMessage.createdAt
                  : true;
              }
            }
            return session;
          })
        );
        setChooseSession(data.data[0]);
      });

    io.emit("joinTheMessagePage", localStorage.getItem("userId"));

    io.on("getListUserOnline", function (data) {
      setUserOnlineList(data);
    });

    io.on("aPersonOnline", function (data) {
      setUserOnlineList((userOnlineList) => [...userOnlineList, data]);
    });
    io.on("aPersonOffline", function (data) {
      setUserOnlineList((userOnlineList) =>
        userOnlineList.filter((user) => user._id != data)
      );
    });

    io.on("getMessage", function (data) {
      setSessionList((sessionList) =>
        sessionList.map((session) => {
          if (session.sessionId._id == data.sessionId) {
            session.lastMessage = {
              content: data.content,
              createdAt: data.createdAt,
            };
          }
          session.isSeen = false;
          return session;
        })
      );
    });

    return () => {
      io.emit("leaveTheMessagePage", localStorage.getItem("userId"));
      io.removeAllListeners("getListUserOnline");
      io.removeAllListeners("aPersonOnline");
      io.removeAllListeners("aPersonOffline");
    };
  }, []);
  //search user to join chat session
  const changeSearchKey = lodash.debounce(async (item) => {
    if (item.target.value) {
      const userList = await searchUserService(item.target.value);
      setUserList(userList.data.data.users.users);
    } else {
      setUserList([]);
    }
  }, 1000);

  const createOrJoinSession = async (name, friendId) => {
    const sessionCheck = sessionList.filter(
      (session) =>
        session.userId.firstName + " " + session.userId.lastName === name
    );
    if (sessionCheck.length == 0) {
      const session = await joinTheSession(friendId, user._id);
      setSessionList([...sessionList, session.data.data]);
      console.log(session.data.data);
      setChooseSession(session.data.data);
    } else {
      setChooseSession(sessionCheck[0]);
    }
  };

  const handleSeenMessage = (id) => {
    setSessionList(
      sessionList.map((session) => {
        if (session.sessionId._id === id) session.isSeen = true;
        return session;
      })
    );
  };

  return (
    <MessagePageComponent
      chooseSession={chooseSession}
      setChooseSession={setChooseSession}
      createOrJoinSession={createOrJoinSession}
      changeSearchKey={changeSearchKey}
      sessionList={sessionList}
      user={user}
      userList={userList}
      setUserList={setUserList}
      userOnlineList={userOnlineList}
      handleSeenMessage={handleSeenMessage}
    />
  );
}

export default MessagePageContainer;
