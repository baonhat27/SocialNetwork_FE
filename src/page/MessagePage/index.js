import React, { useEffect,useRef,useState } from 'react'
import MessagePageComponent from './component'
import io from "socket.io-client";
import {SERVER} from "../../shared/store/env";
function MessagePageContainer(props) {
    const [mess, setMess] = useState([]);
    const [message, setMessage] = useState('');
    const [id, setId] = useState();
  
    const socketRef = useRef();
    useEffect(()=>{
    },[])
    return (
        <div>
            <MessagePageComponent/>
        </div>
    )
}

export default MessagePageContainer
