export const reducer = (state, action) => {
    switch (action.type) {
        case 'addUserInfomation':
            return {
                ...state,
                user:{
                    _id:action._id,
                    email:action.email,
                    firstName:action.firstName,
                    lastName:action.lastName,
                    createdAt:action.createdAt,
                    avatar:action.avatar,
                    dateOfBirth:action.dateOfBirth,
                    gender:action.gender,
                    status:action.status
                }
            }
        case 'handleUserInfo':
            return {
                ...state,
                user:{
                    ...state.user,
                    email:action.email,
                    firstName:action.firstName,
                    lastName:action.lastName,
                    dateOfBirth:action.dateOfBirth,
                    gender:action.gender
                }
            }
        case 'handleAvatar':
            return{
                ...state,
                user:{
                    ...state.user,
                    avatar:action.avatar
                }
            }
        default:
            return state
    }
}