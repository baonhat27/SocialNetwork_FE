export const reducer = (state, action) => {
  switch (action.type) {
    case "addUserInfomation":
      return {
        ...state,
        user: {
          _id: action._id,
          email: action.email,
          firstName: action.firstName,
          lastName: action.lastName,
          createdAt: action.createdAt,
          avatar: action.avatar,
          dateOfBirth: action.dateOfBirth,
          gender: action.gender,
          status: action.status,
        },
      };
    case "handleUserInfo":
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
          firstName: action.firstName,
          lastName: action.lastName,
          dateOfBirth: action.dateOfBirth,
          gender: action.gender,
        },
      };
    case "handleAvatar":
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.avatar,
        },
      };

    case "search":
      return {
        ...state,
        searchkey: action.searchkey,
      };

    case "getNoti":
      return {
        ...state,
        notifications: action.payload,
      };

    case "addNoti":
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
      };

    case "pushNoti":
      return {
        ...state,
        notifications: [...state.notifications, ...action.payload],
      };

    case "readNoti":
      const newNotification = state.notifications.map((noti) => {
        if (noti._id === action.payload) {
          noti.isRead = true;
        }
        return noti;
      });
      return {
        ...state,
        notifications: newNotification,
      };
    case "incomingCall":
      return {
        ...state,
        incomingCall: action.value
      }
      

    default:
      return state;
  }
};
