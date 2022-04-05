import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMessage } from "../../shared/service";
import ChatBoxComponent from "./component";
import styles from "./component/index.module.css";

function ChatBoxContainer(props) {
  const io = useSelector((state) => state.io);
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [imageShow, setImageShow] = useState(-1);

  const seenMessage = () => {
    io.emit("seenMessage", {
      user: props.user._id,
      session: props.session.sessionId._id,
      seenAt: Date.now(),
    });
  };
  const callAPI = async () => {
    const response = await getMessage(props.user, props.session.sessionId._id);
    console.log(response);
  };
  useEffect(() => {
    //get message from another user
    callAPI();
    
  }, [props.session.sessionId._id]);
  useEffect(() => {
    io.emit("joinTheChatRoom", {
      sessionId: props.session.sessionId._id,
    });

    io.on("getMessage", function (data) {
      setMessageList((messageList) => {
        return [...messageList, data];
      });
    });

    io.on("seenMessage", function (data) {
      console.log(data);
    });

    seenMessage();

    return () => {
      io.removeAllListeners("getMessage");
      io.emit("leaveTheChatRoom", {
        sessionId: props.session.sessionId._id,
      });
      setMessageList([]);
    };
  }, [props.session]);
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
      //document
      //.querySelector("." + styles.chatBox_body)
      //.scrollTo(
      //0,
      //document.querySelector("." + styles.chatBox_body).scrollHeight
      //);
    } else {
      alert("Vui lòng nhập tin nhắn");
    }
  };
  const changeMessageInput = (item) => {
    setMessage(item.target.value);
  };
  return (
    <ChatBoxComponent
      imageShow={imageShow}
      setImageShow={setImageShow}
      message={message}
      changeMessageInput={changeMessageInput}
      session={props.session}
      messageList={messageList}
      sendMessage={sendMessage}
      seenMessage={seenMessage}
    />
  );
}

export default ChatBoxContainer;
