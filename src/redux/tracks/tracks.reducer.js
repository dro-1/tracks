import tracksActionTypes from "./tracks.types";

const INITIAL_STATE = {
  tracks: [],
};

const tracksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tracksActionTypes.SET_LATEST_TRACK:
      return {
        ...state,
        tracks: [...state.tracks, action.payload],
      };
    default:
      return state;
  }
};

export default tracksReducer;
