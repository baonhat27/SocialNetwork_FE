export const addUserInfomation=(u)=>{
    return {
        email:u.email,
        type:"addUserInfomation",
        firstName:u.firstName,
        lastName:u.lastName,
        createdAt:u.createdAt,
        avatar:u.avatar,
        dateOfBirth:u.dateOfBirth,
        gender:u.gender,
        status:u.status
    }
}