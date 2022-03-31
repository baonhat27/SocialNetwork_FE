import React, { useEffect,useState } from 'react'
import MessagePageComponent from './component';
import {SERVER} from "../../shared/store/env";
import { useSelector } from 'react-redux';
import { getListSession, joinTheSession, searchUserService } from './service';
import lodash from "lodash";
function MessagePageContainer(props) {
    const [mess, setMess] = useState([]);
    const [sessionList,setSessionList]=useState([]);
    const [userList,setUserList]= useState([]);
    const [id, setId] = useState();
    const io=useSelector(state=>state.io);
    const user=useSelector(state=>state.user);
    useEffect(async ()=>{
        //get message from another user
        // io.on("getMessage",function(data){
        //     alert(data)
        // })
        //get list session to render
        const listSession=await getListSession();
        setSessionList(listSession);

    },[])
    //search user to join chat session
    const changeSearchKey=lodash.debounce(async (item)=>{
        if(item.target.value){
            const userList=await searchUserService(item.target.value);
            setUserList(userList.data.data.users.users);
        }
        else{
            setUserList([])
        }
    },1000);
    const createOrJoinSession=async (userId)=>{
        const session=await joinTheSession([user._id,userId]);
    }
    const sendMessage=()=>{
        //send the message in the chat session
        // io.emit("message","hello");
    }
    return (
        <div>
            <MessagePageComponent createOrJoinSession={createOrJoinSession} changeSearchKey={changeSearchKey} sessionList={sessionList} userList={userList}/>
        </div>
    )
}

export default MessagePageContainer
