import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChatBoxComponent from "./component";
<<<<<<< HEAD
=======
import styles from "./component/index.module.css";
>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2

function ChatBoxContainer(props) {
  const io = useSelector((state) => state.io);
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [imageShow, setImageShow] = useState(-1);
<<<<<<< HEAD
=======

  const seenMessage = () => {
    io.emit("seenMessage", {
      user: props.user._id,
      session: props.session.sessionId._id,
      seenAt: Date.now(),
    });
  };

>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2
  useEffect(() => {
    //get message from another user
  }, []);
  useEffect(() => {
    io.emit("joinTheChatRoom", {
      sessionId: props.session.sessionId._id,
<<<<<<< HEAD
      userId: props.user._id,
=======
>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2
    });

    io.on("getMessage", function (data) {
      setMessageList((messageList) => {
        return [...messageList, data];
      });
<<<<<<< HEAD
      document
        .querySelector(".component_chatBox_body__wIHjv")
        .scrollTo(
          0,
          document.querySelector(".component_chatBox_body__wIHjv").scrollHeight
        );
    });

=======
    });

    io.on("seenMessage", function (data) {
      console.log(data);
    });

    seenMessage();

>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2
    return () => {
      io.removeAllListeners("getMessage");
      io.emit("leaveTheChatRoom", {
        sessionId: props.session.sessionId._id,
<<<<<<< HEAD
        userId: props.user._id,
=======
>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2
      });
      setMessageList([]);
    };
  }, [props.session]);
<<<<<<< HEAD
=======

>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2
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
<<<<<<< HEAD
=======
      //document
      //.querySelector("." + styles.chatBox_body)
      //.scrollTo(
      //0,
      //document.querySelector("." + styles.chatBox_body).scrollHeight
      //);
>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2
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
<<<<<<< HEAD
=======
      seenMessage={seenMessage}
>>>>>>> 11a4ace270afd4aac12f59e20a490b55583325d2
    />
  );
}

export default ChatBoxContainer;
