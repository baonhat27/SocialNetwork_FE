import { createStore } from "redux";
import { io } from "socket.io-client";
import { reducer } from "./reducer";

const it = {
  searchkey: "",
  user: {
    _id: "",
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    avatar: "",
    dateOfBirth: "",
    gender: 0,
    status: 0,
  },
  post: {
    content: "",
    images: "",
    createdBy: "",
    createdAt: "",
    updatedAt: "",
    comments: "",
  },
  notifications: [],
  io:io("http://localhost:8000"),
  incomingCall: {
    isShow: false,
    firstName: '', 
    lastName: '', 
    avatar: 'https://avatarfiles.alphacoders.com/121/121046.jpg', 
    caller_socket_id: '', 
    caller_user_id: '',
    has_video: false
  }
};
export const store = createStore(reducer, it);

