import { combineReducers } from "redux";

import tracksReducer from "./tracks/tracks.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  tracks: tracksReducer,
  user: userReducer,
});

export default rootReducer;
