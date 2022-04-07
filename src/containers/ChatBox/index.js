import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import ChatBoxComponent from "./component";
import styles from "./component/index.module.css";
import { handleSessionNameService } from "./service";
import { getMessage } from "../../shared/service";

function ChatBoxContainer(props) {
  const io = useSelector((state) => state.io);
  const [messageList, setMessageList] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const [imageShow, setImageShow] = useState(-1);
  const [sessionName, setSessionName] = useState(props.session.sessionId.name);
  const [handleSessionName, setHandleSessionName] = useState(false);
  const [sessionNameInput, setSessionNameInput] = useState(
    props.session.sessionId.name
  );
  const countAfterMessage = useRef(0);
  const countBeforeMessage = useRef(0);
  const loadBeforeMore = useRef(true);

  const callAPI = async () => {
    const res = await getMessage({
      userId: props.user._id,
      sessionId: props.session.sessionId._id,
    });
    setMessageList((messageList) =>
      messageList.concat(res.data.result).reverse()
    );
    console.log(res.data.result);
    //loadMore.current =
    //countBeforeMessage.current + res.data.result.length < res.data.total;
    //countBeforeMessage.current += res.data.result.length;
  };

  useEffect(async () => {
    //get message from another user
    await callAPI();
    scrollToBottom();
  }, [props.session]);

  const isBottom = useRef(true);
  const [lock, setLock] = useState(false);

  const seenMessage = () => {
    io.emit("seenMessage", {
      user: props.user._id,
      session: props.session.sessionId._id,
      seenAt: Date.now(),
    });
  };

  const checkTop = () => {
    const chatBox = document.getElementById("chatBox");
    if (chatBox.scrollTop === 0) return true;
    return false;
  };

  const checkBottom = () => {
    const lastMessage = document.getElementById("lastMessage");
    const rect = lastMessage.getBoundingClientRect();
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
      return true;
    }

    return false;
  };

  const scrollToBottom = () => {
    const lastMessage = document.getElementById("lastMessage");
    lastMessage.scrollIntoView();
    isBottom.current = true;
  };

  const handleScroll = async () => {
    isBottom.current = checkBottom();
    if (isBottom.current && !lock) {
      setLock(true);
      seenMessage();
    }

    if (checkTop()) {
      const firstMessage = messageList[0];
      if (loadBeforeMore.current) {
        loadBeforeMore.current = false;
        const res = await getMessage({
          userId: props.user._id,
          sessionId: props.session.sessionId._id,
          before: firstMessage.createdAt,
        });

        const newMessage = res.data.result.reverse();
        setMessageList((messageList) => [...newMessage, ...messageList]);

        loadBeforeMore.current = res.data.result.length !== 0;
      }
    }
  };

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

      if (data.createdBy._id !== props.user._id) {
        setLock(false);
      }

      if (checkBottom()) {
        seenMessage();
      }

      if (isBottom.current) {
        scrollToBottom();
      }
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
      handleScroll={handleScroll}
    />
  );
}

export default ChatBoxContainer;
