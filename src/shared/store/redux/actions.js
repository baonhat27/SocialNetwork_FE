export const addUserInfomation=(u)=>{
    return {
        email:u.email,
        type:"addUserInfomation",
        _id:u._id,
        firstName:u.firstName,
        lastName:u.lastName,
        createdAt:u.createdAt,
        avatar:u.avatar,
        dateOfBirth:u.dateOfBirth,
        gender:u.gender,
        status:u.status
    }
}
export const handleUserInfo=(u)=>{
    return {
        type:"handleUserInfo",
        email:u.email,
        firstName:u.firstName,
        lastName:u.lastName,
        dateOfBirth:u.dateOfBirth,
        gender:u.gender
    }
}
export const handleAvatar=(u)=>{
    return{
        type:"handleAvatar",
        avatar:u
    }
}