import React from "react";
import "./Header.css";
import HindustanTimesLogo from "../logo/HindustanLogo.png";
const Header = () => {
  return (
    <>
      <div className="container">
        <ul className="list-1">
          <li>Home</li>
          <li>About-Us</li>
        </ul>
        <img src={HindustanTimesLogo} alt="" className="hindustanTimesLogo" />

        <ul className="list-2">
          <li>Contact-Us</li>
          <li>Search</li>
          <li>Carriers</li>
          <li>Content</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
