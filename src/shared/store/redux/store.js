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
  io:io("http://localhost:8000")
};
export const store = createStore(reducer, it);

