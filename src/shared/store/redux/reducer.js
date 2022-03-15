export const reducer = (state, action) => {
    switch (action.type) {
        case 'addUserInfomation':
            console.log(action);
            return {
                ...state,
                user:{
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
        default:
            return state
    }
}