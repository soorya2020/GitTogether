import { useState, lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
const Login = lazy(() => import("./components/Login"));
const Feed = lazy(() => import("./components/Feed.jsx"));
const EditProfile = lazy(() => import("./components/EditProfile.jsx"));
const Requests = lazy(() => import("./components/Requests.jsx"));
const Connections = lazy(() => import("./components/Connections.jsx"));
const Subscription = lazy(() => import("./components/Subscription"));
const Chat = lazy(() => import("./components/Chat/Chat.jsx"));
const Home = lazy(() => import("./components/Home"));
import { BrowserRouter, Route, Routes } from "react-router";
import BodyLayout from "./components/BodyLayout";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route element={<BodyLayout />}>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/feeds"
                  element={
                    <Suspense fallback={<div>Loading feed...</div>}>
                      <Feed />{" "}
                    </Suspense>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Suspense fallback={<div>Loading profile...</div>}>
                      <EditProfile />
                    </Suspense>
                  }
                />
                <Route
                  path="/connections"
                  element={
                    <Suspense fallback={<div>Loading connection...</div>}>
                      <Connections />
                    </Suspense>
                  }
                />
                <Route
                  path="/requests"
                  element={
                    <Suspense fallback={<div>Loading request...</div>}>
                      <Requests />
                    </Suspense>
                  }
                />
                <Route
                  path="/subscription"
                  element={
                    <Suspense fallback={<div>Loading subscription...</div>}>
                      <Subscription />
                    </Suspense>
                  }
                />
                <Route
                  path="/chat/:toUserId"
                  element={
                    <Suspense fallback={<div>Loading caht...</div>}>
                      <Chat />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
