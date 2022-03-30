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
<<<<<<< HEAD
  io:io("http://localhost:8000"),
=======
  io:io("http://localhost:8000")
>>>>>>> 61d2a6db5a8700d41c0a1cd1e8bb879136439d58
};
export const store = createStore(reducer, it);

