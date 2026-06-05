import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Pricing from "./Pricing";
import Contact from "./Contact"
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div id="home">
      <Navbar className="sticky" user={props.user} setUser={props.setUser} />
      <Header user={props.user} />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
