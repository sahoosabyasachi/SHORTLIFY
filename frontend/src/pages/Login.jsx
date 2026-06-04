import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${apiUrl}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      props.setUser(response.data.user);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }

    setEmail("");
    setPassword("");
  };

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-(--bg) min-h-screen ">
      <div className="bg-(--muted) w-auto md:w-90 h-100 rounded-xl flex flex-col gap-4 items-center justify-center">
        <form
          action=""
          className="flex flex-col gap-5 w-[98%] items-center"
          onSubmit={submitHandler}
        >
          <h1 className="text-3xl text-(--text) text-start inline  w-[80%]">
            Login
          </h1>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-(--text) w-[80%] p-2 rounded border-none outline-none"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-(--text) w-[80%] p-2 rounded border-none outline-none"
          />
          <button className="bg-(--primary) border border-transparent text-(--text) cursor-pointer px-auto  w-[80%] py-2 hover:bg-(--secondary) transition-all duration-200 hover:border-(--primary) rounded-xl">
            Sign In
          </button>
        </form>
        <p className="text-black px-4 md:p-0">
          Don't have an account.{" "}
          <span
            className="text-(--primary) underline cursor-pointer "
            onClick={() => {
              navigate("/signup");
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
