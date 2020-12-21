import userActionTypes from "./user.types";

export const logUserIn = (user) => ({
  type: userActionTypes.LOG_USER_IN,
  payload: user,
});
