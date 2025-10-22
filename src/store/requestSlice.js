import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: { requests: null },
  reducers: {
    addRequests: (state, action) => {
      state.requests = action.payload;
    },
    removeConnection: (state, action) => {
      state.requests = state.requests.filter(
        (request) => request._id !== action.payload
      );
    },
    clearRequests: (state, action) => {
      state.requests = null;
    },
  },
});

export const { addRequests, removeConnection, clearRequests } =
  requestSlice.actions;
export default requestSlice.reducer;
