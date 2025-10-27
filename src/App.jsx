import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import BodyLayout from "./components/BodyLayout";
import Feed from "./components/Feed.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import EditProfile from "./components/EditProfile.jsx";
import Connections from "./components/Connections.jsx";
import Requests from "./components/Requests.jsx";
import Home from "./components/Home.jsx";
import Subscription from "./components/Subscription";
import Chat from "./components/Chat/Chat.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route element={<BodyLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/feeds" element={<Feed />} />
              <Route path="/profile" element={<EditProfile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/chat/:toUserId" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
