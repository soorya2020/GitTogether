import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const feedSlice = createSlice({
  name: "feeds",
  initialState: { feeds: null },
  reducers: {
    addFeeds: (state, action) => {
      state.feeds = action.payload;
    },
    removeUserFromFeeds: (state, action) => {
      state.feeds = state.feeds.filter((feed) => feed._id !== action.payload);
    },
    clearFeeds: (state, actions) => {
      state.feeds = null;
    },
  },
});

export const { addFeeds, removeUserFromFeeds, clearFeeds } = feedSlice.actions;

export default feedSlice.reducer;
