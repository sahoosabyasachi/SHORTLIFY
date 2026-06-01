import React from "react";
import icon from "../assets/images/icon.svg";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-(--bg)">
      <div className="bg-(--bg) flex md:flex-row flex-col gap-5 justify-around items-start md:py-5 px-5">
        <div className="flex flex-col gap-2  items-start justify-center text-(--text) md:w-[25%]">
          <div className=" overflow-hidden bg-(--bg) flex gap-2 items-center justify-start">
            <img className="w-10 h-10 object-contain" src={icon} alt="" />
            <h1 className="text-(--text) text-2xl font-semibold">Shortlify</h1>
          </div>
          <p className="text-xs">
            Fast, secure, and intelligent URL shortening platform. Turn long
            links into short, trackable, and powerful experiences.
          </p>
        </div>

        <div className="flex flex-col gap-2  items-start justify-center text-(--text) md:w-[25%]">
          <h1 className="text-(--text) text-2xl font-semibold">Features</h1>
          <ul className="text-xs text-(--text)">
            <li>Link Shortener</li>

            <li>QR Code Generator</li>

            <li>Analytics</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2  items-start justify-center text-(--text) md:w-[25%]">
          <h1 className="text-(--text) text-2xl font-semibold">Contact</h1>
          <div>
            <ul className="flex flex-col items-start gap-2 text-xs justify-center">
              <li className="flex items-center justify-center gap-2">
                <Mail />
                shortlify@email.com
              </li>
              <li className="flex items-center justify-center gap-2">
                <Phone />
                +91 123-456-7890
              </li>
              <li className="flex items-center justify-center gap-2">
                <MapPin />
                Near Clock Tower, Bhubaneswar
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
        <p className="text-center text-(--text) text-xs p-4">
          ©2026 Shortlify | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
