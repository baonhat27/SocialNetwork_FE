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
    _id:u._id,
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
      _id:u._id,
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
