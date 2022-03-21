export const addUserInfomation = (u) => {
  return {
    email: u.email,
    type: "addUserInfomation",
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
export const searchInfo=(u)=>{
  return {
    type:"search",
    searchkey:u
  }
}