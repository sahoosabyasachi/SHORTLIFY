import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Term from "./pages/Term";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UrlPage from "./pages/UrlPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/term" element={<Term />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/urls" element={<UrlPage/>} />
      </Routes>
    </div>
  );
};

export default App;
