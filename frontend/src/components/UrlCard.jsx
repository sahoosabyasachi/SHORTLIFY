import React from "react";

const UrlCard = (props) => {
  return (
    <div className="bg-(--primary)  h-20 text-(--text) flex items-center justify-around rounded-xl hover:bg-(--secondary) transition-all duration-200">
      <div><span className="font-semibold">URL: </span>{props.url}</div>
      <div><span className="font-semibold">Clicks: </span>{props.clicks}</div>
    </div>
  );
};

export default UrlCard;
