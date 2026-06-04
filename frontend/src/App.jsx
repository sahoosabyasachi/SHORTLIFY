import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Term from "./pages/Term";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UrlPage from "./pages/UrlPage";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user`, {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/term" element={<Term />} />
        <Route path="/signin" element={<Login user={user} setUser={setUser} />} />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route path="/urls" element={<UrlPage />} />
      </Routes>
    </div>
  );
};

export default App;
