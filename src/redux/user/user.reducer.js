import userActionTypes from "./user.types";

const INITIAL_STATE = {
  user: {
    isSignedIn: false,
  },
};

const tracksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.LOG_USER_IN:
      return {
        ...state,
        user: {
          ...state.user,
          isSignedIn: true,
        },
      };
    default:
      return state;
  }
};

export default tracksReducer;
