import React from "react";
const apiUrl = import.meta.env.VITE_API_URL;

const UrlCard = (props) => {
  return (
    <div className="bg-(--primary) text-(--text) rounded-xl hover:bg-(--secondary) transition-all duration-200 ">
      <div className="flex items-center justify-center">{props.url.originalUrl}</div>
      <div className="  h-20 text-(--text) flex items-center justify-around rounded-xl  hover:bg-(--secondary) transition-all duration-200">
        <div>
          <span className="font-semibold">URL: </span>
          {apiUrl}/{props.url.shortId}
        </div>
        <div>
          <span className="font-semibold">Clicks: </span>
          {props.url.clicks}
        </div>
      </div>
    </div>
  );
};

export default UrlCard;
