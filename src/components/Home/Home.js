import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div className="Home">
      <iframe src="https://www.youtube.com/embed/lF19DBs39Xg?si=pM1mK1tOKSgPagkh&amp;controls=0&amp;start=20&autoplay=1&mute=1&loop=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div className="Home-content">
      <header className="Home-header">
        <h1 id="Home-title">TitanEats</h1>
      </header>
      <div className="Home-links">
          <Link to="/signin" className="Home-link">Sign-In</Link>
        </div>
    </div>
    </div>
  );
} 

export default Home;
