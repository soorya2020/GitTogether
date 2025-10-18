import { useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import BodyLayout from "./components/BodyLayout";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BodyLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<div> profile page</div>} />
              <Route path="/about" element={<div> about page</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
