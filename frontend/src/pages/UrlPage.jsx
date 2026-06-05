import React from "react";
import UrlCard from "../components/UrlCard";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const UrlPage = () => {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    const fetchUrl = async (req, res) => {
      const response = await axios.get(`${apiUrl}/url`, { withCredentials: true });

      setUrl(response.data.url);
    };
    fetchUrl();
  }, []);

  console.log(url);

  return (
    <div className="bg-(--bg) min-h-screen  w-screen grid grid-cols-1 md:grid-cols-4 gap-4 content-start p-4">
      {url.map((url) => {
        return <UrlCard url={url} />;
      })}
    </div>
  );
};

export default UrlPage;
