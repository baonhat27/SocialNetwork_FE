import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import ChatBoxComponent from "./component";
import styles from "./component/index.module.css";
import { deleteMessageService, handleSessionNameService } from "./service";
import { getMessage } from "../../shared/service";

function ChatBoxContainer(props) {
  const io = useSelector((state) => state.io);
  const [messageList, setMessageList] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const [imageShow, setImageShow] = useState(-1);
  const [sessionName, setSessionName] = useState(props.session.sessionId.name);
  const [handleSessionName, setHandleSessionName] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState("");
  const [sessionNameInput, setSessionNameInput] = useState(
    props.session.sessionId.name
  );
  const countAfterMessage = useRef(0);
  const countBeforeMessage = useRef(0);
  const loadBeforeMore = useRef(true);

  const [seenList, setSeenList] = useState(() => {
    return !props.session.userLastSeen ||
      props.session.userLastSeen.length === 0
      ? []
      : props.session.userLastSeen.filter((seen) => {
          return seen.user._id !== props.user._id;
        });
  });

  const callAPI = async () => {
    const res = await getMessage({
      userId: props.user._id,
      sessionId: props.session.sessionId._id,
    });

    setMessageList((messageList) => {
      return messageList.concat(res.data.result).reverse();
    });
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
      props.handleSeenMessage(props.session.sessionId._id);
    }

    if (checkTop()) {
      const firstMessage = messageList[0];
      console.log(firstMessage);
      if (loadBeforeMore.current) {
        loadBeforeMore.current = false;
        const res = await getMessage({
          userId: props.user._id,
          sessionId: props.session.sessionId._id,
          before: firstMessage.createdAt || "",
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
    io.on("getMessageDeleted",function(data){
      setMessageList((messageList) =>
        messageList.map((message, index) => {
          if (index == messageList.length - 1) {
            props.updateSessionContent(props.session.sessionId._id);
          }
          if (message._id == data._id) {
            return {
              ...message,
              content: "Tin nhắn đã gỡ",
              image: [],
            };
          }
          return message;
        })
      );
    })
    io.on("getMessage", function (data) {
      setMessageList((messageList) => {
        return [...messageList, data];
      });

      if (data.createdBy._id !== props.user._id) {
        setLock(false);
      } else {
        scrollToBottom();
      }

      if (checkBottom()) {
        seenMessage();
      }

      if (isBottom.current) {
        scrollToBottom();
        props.handleSeenMessage(props.session.sessionId._id);
      }

      setSeenList(
        seenList.map((seen) => {
          if (seen.user === data.createdBy._id) seen.seenAt = data.createdAt;
          return seen;
        })
      );
    });

    io.on("seenMessage", function (data) {
      setSeenList(
        seenList.map((seen) => {
          if (seen.user._id === data.user) {
            seen.seenAt = data.seenAt;
          }
          return seen;
        })
      );
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
  const deleteMessageEveryBody=()=>{
    io.emit("deletedMessageEveryBody",{
      _id:showDeleteMessage,
      sessionId:props.session.sessionId._id
    });
  }
  const changeMessageInput = (item) => {
    setMessage(item.target.value);
  };
  const deleteMessage = async (_id) => {
    const check = await deleteMessageService(_id);
    if (check) {
      setMessageList((messageList) =>
        messageList.map((message, index) => {
          if (index == messageList.length - 1) {
            props.updateSessionContent(props.session.sessionId._id);
          }
          if (message._id == _id) {
            return {
              ...message,
              content: "Tin nhắn đã gỡ",
              image: [],
            };
          }
          return message;
        })
      );
    } else {
      alert("Xóa tin nhắn thất bại, vui lòng thử lại sau");
    }
  };

  return (
    <ChatBoxComponent
    deleteMessageEveryBody={deleteMessageEveryBody}
      sessionName={sessionName}
      setShowDeleteMessage={setShowDeleteMessage}
      setSessionName={setSessionName}
      sessionNameInput={sessionNameInput}
      imageShow={imageShow}
      setImageShow={setImageShow}
      message={message}
      seenList={seenList}
      changeMessageInput={changeMessageInput}
      setSessionNameInput={setSessionNameInput}
      handleSessionName={handleSessionName}
      setHandleSessionName={setHandleSessionName}
      session={props.session}
      messageList={messageList}
      saveSessionName={saveSessionName}
      sendMessage={sendMessage}
      handleScroll={handleScroll}
      deleteMessage={deleteMessage}
      showDeleteMessage={showDeleteMessage}
    />
  );
}

export default ChatBoxContainer;
