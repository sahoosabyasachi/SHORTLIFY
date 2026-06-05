import React, { useState } from "react";
import { ChartNoAxesCombined, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Header = (props) => {
  const [url, setUrl] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${apiUrl}/shorten`,
      { originalUrl: url },
      { withCredentials: true },
    );

    setUrl("");
    props.user ? navigate("/urls") : navigate("/signin");
  };

  const navigate = useNavigate();

  return (
    <div className="bg-[#0F172A] h-full flex flex-col items-center gap-10 md:gap-20 pt-20 p-4 md:p-20">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className=" text-5xl sm:text-6xl font-bold text-(--text) text-center">
          Create Short Links That Drive Results
        </h1>
        <p className="text-base sm:text-xl text-(--text) text-center">
          Transform long URLs into clean, trackable links and gain insights that
          help you grow faster.
        </p>
      </div>
      <div className="w-full">
        <form
          action="POST"
          className="w-full flex flex-col md:flex-row gap-4 justify-center"
          onSubmit={submitHandler}
        >
          <input
            className="w-full md:w-[50%] bg-(--text) px-4 py-2 border-none outline-none rounded placeholder:text-(--muted)"
            type="text"
            name="originalUrl"
            id=""
            placeholder="Paste your URL"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button className="w-full md:w-[15%] px-4 py-2 bg-(--primary) rounded text-(--text) font-semibold hover:md:scale-105 hover:scale-102 transition-all duration-200">
            Shorten Link
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        <button
          className="h-40 rounded-xl bg-(--primary) flex items-center justify-center hover:scale-105 transition-all duration-200"
          onClick={() => (props.user ? navigate("/urls") : navigate("/signin"))}
        >
          <div className="flex flex-col items-center gap-5">
            <ChartNoAxesCombined className="text-(--text) size-20" />
            <p className="text-xl font-bold text-(--text)">Analytics</p>
          </div>
        </button>
        <button
          className="h-40 rounded-xl bg-(--primary) flex items-center justify-center hover:scale-105 transition-all duration-200"
          onClick={() => (props.user ? navigate("/urls") : navigate("/signin"))}
        >
          <div className="flex flex-col items-center gap-5">
            <Link2 className="text-(--text) size-20" />
            <p className="text-xl font-bold text-(--text)">Shorten URLs</p>
          </div>
        </button>
        {props.user && (
          <button
            className="col-span-2 py-3 rounded-xl bg-(--primary) text-(--text) hover:scale-105 transition-all duration-200"
            onClick={() => navigate("/signup")}
          >
            Start Free
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
