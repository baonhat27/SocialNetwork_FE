export const addUserInfomation = (u) => {
  return {
    type: "addUserInfomation",
    email: u.email,
    _id: u._id,
    firstName: u.firstName,
    lastName: u.lastName,
    createdAt: u.createdAt,
    avatar: u.avatar,
    dateOfBirth: u.dateOfBirth,
    gender: u.gender,
    status: u.status,
  };
};
export const handleUserInfo = (u) => {
  return {
    type: "handleUserInfo",
    _id: u._id,
    email: u.email,
    firstName: u.firstName,
    lastName: u.lastName,
    dateOfBirth: u.dateOfBirth,
    gender: u.gender,
  };
};
export const createComment = (u) => {
  return {
    type: "createComment",
    post: {
      _id: u._id,
      content: u.content,
      images: u.image,
      createdBy: u.createdBy,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
      comments: u.comments,
    },
  };
};
export const handleAvatar = (u) => {
  return {
    type: "handleAvatar",
    avatar: u,
  };
};

export const getNoti = (noti) => {
  return {
    type: "getNoti",
    payload: noti,
  };
};

export const pushNoti = (noti) => {
  return {
    type: "pushNoti",
    payload: noti,
  };
};

export const addNoti = (noti) => {
  return {
    type: "addNoti",
    payload: noti,
  };
};

export const readNoti = (notiId) => {
  return {
    type: "readNoti",
    payload: notiId,
  };
};
export const searchInfo = (u) => {
  return {
    type: "search",
    searchkey: u,
  };
};
export const incomingCall = (value) => {
  return {
    type: "incomingCall",
    value: value
  };
};
