import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full p-10 flex items-center justify-center bg-[#0F172A]">
      <form action="" className="w-[95%] md:w-[50%] flex flex-col gap-4 items-center justify-center">
        <input className="w-full h-12 rounded outline-none border-none bg-(--text) px-4 placeholder:text-(--muted)" type="email" name="" id="" placeholder="Enter Your e-mail" />
        <input className="w-full h-12 rounded outline-none border-none bg-(--text) px-4 placeholder:text-(--muted)" type="tel" name="" id="" placeholder="Enter Your Mobile Number" />
        <input className="w-full h-20 rounded outline-none border-none bg-(--text) px-4 placeholder:text-(--muted)" type="text" name="" id="" placeholder="Your Queries" />
        <button className="bg-(--primary) w-full px-auto py-2 h-12 rounded text-(--text) text-xl font-semibold hover:scale-105 transition-all duration-200">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
