import tracksActionTypes from "./tracks.types";

export const setLatestTrack = (latestTrack) => ({
  type: tracksActionTypes.SET_LATEST_TRACK,
  payload: latestTrack,
});
