import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedsReducer from "./feedSlice";
import connectionsReducer from "./connectionSlice";
import requestsReducer from "./requestSlice";

export const store = configureStore({
  reducer: { userReducer, feedsReducer, connectionsReducer, requestsReducer },
});
