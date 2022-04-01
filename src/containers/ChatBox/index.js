import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatBoxComponent from './component'

function ChatBoxContainer(props) {
    const io=useSelector(state=>state.io);
    const [messageList,setMessageList]=useState([]);
    const [message,setMessage]=useState("");
    useEffect(()=>{
    //get message from another user
    
    },[])
    useEffect(()=>{
        io.emit("joinTheChatRoom",{
            sessionId:props.session.sessionId._id
        })


        io.on("getMessage",function(data){
            setMessageList(messageList=>{
                return [...messageList,data]
            });
            
        })
    
        return ()=>{
            io.removeAllListeners("getMessage");
            io.emit("leaveTheChatRoom",{
                sessionId:props.session.sessionId._id
            })
            setMessageList([])
        }
        
    },[props.session])
    const sendMessage = () => {
        // send the message in the chat session
        io.emit("message",{
            sessionId:props.session.sessionId._id,
            user:props.user,
            content:message
        });
        setMessage("")
      };
    const changeMessageInput=(item)=>{
        setMessage(item.target.value);
    }
    return (
        
            <ChatBoxComponent message={message} changeMessageInput={changeMessageInput} session={props.session} messageList={messageList} sendMessage={sendMessage}/>
      
    )
}

export default ChatBoxContainer
