import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatBoxComponent from './component'

function ChatBoxContainer(props) {
    const io=useSelector(state=>state.io);
    const [messageList,setMessageList]=useState([]);
    const [message,setMessage]=useState("");
    useEffect(()=>{
    //get message from another user
    io.on("getMessage",function(data){
        setMessageList([...messageList,data]);
        alert(data)
    })
    },[])
    useEffect(()=>{
        io.emit("joinTheChatRoom",{
            sessionId:props.session.sessionId._id
        })
    },[props.session])
    const sendMessage = () => {
        // send the message in the chat session
        io.emit("message",{
            sessionId:props.session.sessionId._id,
            message:message
        });
      };
    const changeMessageInput=(item)=>{
        setMessage(item.target.value);
    }
    return (
        <div>
            <ChatBoxComponent changeMessageInput={changeMessageInput} session={props.session} messageList={messageList} sendMessage={sendMessage}/>
        </div>
    )
}

export default ChatBoxContainer
