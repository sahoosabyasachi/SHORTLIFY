import React from "react";
import UrlCard from "../components/UrlCard";

const UrlPage = () => {
  const urlList = [
    {
      id: 1,
      url: "https://google.com",
      clicks: 3,
    },
    {
      id: 2,
      url: "https://google.com",
      clicks: 3,
    },
    {
      id: 3,
      url: "https://google.com",
      clicks: 3,
    },
    {
      id: 4,
      url: "https://google.com",
      clicks: 3,
    },
    {
      id: 5,
      url: "https://google.com",
      clicks: 3,
    },
    {
      id: 6,
      url: "https://google.com",
      clicks: 3,
    },
    {
      id: 7,
      url: "https://google.com",
      clicks: 3,
    },
  ];

  return (
    <div className="bg-(--bg) min-h-screen  w-screen grid grid-cols-1 md:grid-cols-4 gap-4 content-start p-4">
      {urlList.map((url) => {
        return <UrlCard url={url.url} clicks={url.clicks} key={url.id} />;
      })}
    </div>
  );
};

export default UrlPage;
