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
  const [chooseSession, setChooseSession] = useState();
  const [id, setId] = useState();
  const io = useSelector((state) => state.io);
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch();
  useEffect(()=>{
    checkToken(getUserInfo(dispatch),dispatch);
  },[localStorage.getItem("token")])
  useEffect(async () => {
    
    //get list session to render
    const listSession = await getListSession();
    setSessionList(listSession.data.data);
    setChooseSession(listSession.data.data[0]);
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
    const sessionCheck = sessionList.filter((session) => session.userId.firstName+" "+session.userId.lastName === name);
    if (sessionCheck.length == 0) {
      const session = await joinTheSession(friendId, user._id);
      setSessionList([...sessionList,session.data.data])
    } else {
      setChooseSession(sessionCheck[0]);
    }
  };
  
  return (
    <div>
      {chooseSession && <MessagePageComponent
        chooseSession={chooseSession} setChooseSession={setChooseSession}
        createOrJoinSession={createOrJoinSession}
        changeSearchKey={changeSearchKey}
        sessionList={sessionList}
        user={user}
        userList={userList} setUserList={setUserList}
      />}
    </div>
  );
}

export default MessagePageContainer;
