import React from "react";
import LoginButton from "./LoginButton";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src="movie_club.png" alt="Movie Logo" className="logo" />
      </div>
      <div className="header-right">
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
