import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: { connections: null },
  reducers: {
    addConnections: (state, action) => {
      state.connections = action.payload;
    },
    clearConnections: (state, action) => {
      state.connections = null;
    },
  },
});

export const { addConnections ,clearConnections} = connectionsSlice.actions;
export default connectionsSlice.reducer;
