import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import ChatBoxComponent from "./component";
import styles from "./component/index.module.css";
import { handleSessionNameService } from "./service";
import { getMessage } from "../../shared/service/index";

function ChatBoxContainer(props) {
  const io = useSelector((state) => state.io);
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [imageShow, setImageShow] = useState(-1);
  const [sessionName, setSessionName] = useState(props.session.sessionId.name);
  const [handleSessionName, setHandleSessionName] = useState(false);
  const [sessionNameInput, setSessionNameInput] = useState(
    props.session.sessionId.name
  );
  const total =useRef(0)
  const loadMore = useRef(false);
  const seenMessage = () => {
    io.emit("seenMessage", {
      user: props.user._id,
      session: props.session.sessionId._id,
      seenAt: Date.now(),
    });
  };
  const callAPI = async () => {
    const res = await getMessage(props.user._id, props.session.sessionId._id);
    // setMessageList(prev => prev + res.data )
    setMessageList((messageList) => messageList.concat(res.data.result).reverse());
  };
  useEffect(() => {
    //get message from another user
    callAPI();
  }, [props.session.sessionId._id]);
  useEffect(() => {
    setSessionName(props.session.sessionId.name);
    setSessionNameInput(props.session.sessionId.name);
    io.emit("joinTheChatRoom", {
      sessionId: props.session.sessionId._id,
    });

    io.on("getMessage", function (data) {
      setMessageList((messageList) => {
        return [...messageList, data];
      });
      if (props.user._id == data.createdBy._id) {
        document
          .querySelector("." + styles.chatBox_body)
          .scrollTo(
            0,
            document.querySelector("." + styles.chatBox_body).scrollHeight
          );
      }
    });

    io.on("seenMessage", function (data) {});

    seenMessage();

    return () => {
      io.removeAllListeners("getMessage");
      io.emit("leaveTheChatRoom", {
        sessionId: props.session.sessionId._id,
      });
      setMessageList([]);
    };
  }, [props.session.sessionId._id]);

  const sendMessage = (images, clearImage) => {
    // send the message in the chat session
    if (message != "" || images.length) {
      io.emit("message", {
        sessionId: props.session.sessionId._id,
        user: props.user,
        content: message,
        image: images ? images : [],
      });
      setMessage("");
      clearImage();
    } else {
      alert("Vui lòng nhập tin nhắn");
    }
  };
  const saveSessionName = () => {
    handleSessionNameService(props.session.sessionId._id, sessionNameInput);
  };
  const changeMessageInput = (item) => {
    setMessage(item.target.value);
  };
  return (
    <ChatBoxComponent
      sessionName={sessionName}
      setSessionName={setSessionName}
      sessionNameInput={sessionNameInput}
      imageShow={imageShow}
      setImageShow={setImageShow}
      message={message}
      changeMessageInput={changeMessageInput}
      setSessionNameInput={setSessionNameInput}
      handleSessionName={handleSessionName}
      setHandleSessionName={setHandleSessionName}
      session={props.session}
      messageList={messageList}
      saveSessionName={saveSessionName}
      sendMessage={sendMessage}
      seenMessage={seenMessage}
    />
  );
}

export default ChatBoxContainer;
