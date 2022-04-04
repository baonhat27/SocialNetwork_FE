import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChatBoxComponent from './component'

function ChatBoxContainer(props) {
    const io=useSelector(state=>state.io);
    const [messageList,setMessageList]=useState([]);
    const [message,setMessage]=useState("");
    const [imageShow,setImageShow]=useState(-1);
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
            document.querySelector('.component_chatBox_body__wIHjv').scrollTo(0,document.querySelector('.component_chatBox_body__wIHjv').scrollHeight);
            
        })
    
        return ()=>{
            io.removeAllListeners("getMessage");
            io.emit("leaveTheChatRoom",{
                sessionId:props.session.sessionId._id
            })
            setMessageList([])
        }
        
    },[props.session])
    const sendMessage = (images,clearImage) => {
        // send the message in the chat session
        if(message!="" || images.length){
            io.emit("message",{
                sessionId:props.session.sessionId._id,
                user:props.user,
                content:message,
                image:images?images:[]
            });
            setMessage("");
            clearImage();
        }
        else{
            alert("Vui lòng nhập tin nhắn");
        }
      };
    const changeMessageInput=(item)=>{
        setMessage(item.target.value);
    }
    return (
        
            <ChatBoxComponent imageShow={imageShow} setImageShow={setImageShow} message={message} changeMessageInput={changeMessageInput} session={props.session} messageList={messageList} sendMessage={sendMessage}/>
      
    )
}

export default ChatBoxContainer
