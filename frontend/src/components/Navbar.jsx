import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="sticky top-0 flex items-center w-full justify-between bg-(--bg) py-2 px-6 md:px-30 relative z-50">
      <div className="shrink-0">
        <a href="/">
          <img className="w-50 md:w-60 " src={logo} alt="logo" />
        </a>
      </div>
      <div className="hidden md:flex text-(--muted) gap-10 justify-between items-center">
        <a
          className="hover:text-(--secondary) transition-all duration-200"
          href="#home"
        >
          Home
        </a>
        <a
          className="hover:text-(--secondary) transition-all duration-200"
          href="#pricing"
        >
          Pricing
        </a>
        <a
          className="hover:text-(--secondary) transition-all duration-200"
          href="#contact"
        >
          Contact
        </a>
        <Link
          className="hover:text-(--secondary) transition-all duration-200"
          to="/term"
        >
          Term
        </Link>
      </div>
      <div className="hidden md:flex gap-8">
        <button
          className="bg-none border-none text-(--muted) cursor-pointer hover:text-(--text) transition-all duration-200"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </button>
        <button
          className="bg-(--secondary) px-5 py-2 rounded-xl text-(--text) hover:bg-(--primary) transition-all duration-200"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Start Free
        </button>
      </div>
      <div className="md:hidden ">
        <button className="cursor-pointer" onClick={handleMenu}>
          {open ? (
            <X className="text-(--secondary)" />
          ) : (
            <Menu className="text-(--secondary)" />
          )}
        </button>
      </div>
      {open && (
        <div className="flex flex-col text-(--muted) gap-4 justify-center items-start absolute top-15 bg-(--bg) inset-x-0 max-w-[95%] mx-auto p-4 transition-all duration-200 rounded-b-2xl md:hidden">
          <a
            className="hover:text-(--secondary) transition-all duration-200 w-full"
            href="#home"
          >
            Home
          </a>

          <a
            className="hover:text-(--secondary) transition-all duration-200 w-full"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="hover:text-(--secondary) transition-all duration-200 w-full"
            href="#contact"
          >
            Contact
          </a>
          <Link
            className="hover:text-(--secondary) transition-all duration-200 w-full"
            to="/term"
          >
            Term
          </Link>

          <div className="flex items-center justify-around w-full text-nowrap gap-4">
            <button
              className="bg-none border border-transparent text-(--muted) cursor-pointer px-auto  w-full py-2 hover:text-(--text) transition-all duration-200 hover:border-(--primary) rounded-xl"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </button>
            <button
              className="bg-(--secondary) px-auto w-full py-2 rounded-xl text-(--text) hover:bg-(--primary) transition-all duration-200"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Start Free
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
