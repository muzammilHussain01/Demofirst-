import React, { useEffect, useRef } from "react";
import "./Header.css";
import HindustanTimesLogo from "../logo/HindustanLogo.png";

const Header = () => {
  const task = useRef("");

  useEffect(() => {
    const funn = () => {
      console.log("I am sorolling !");
      if (task.current.style) {
        if (window.scrollY > 15) {
          task.current.style.opacity = 0;
          task.current.style.transition = "opacity 0.5s ease-in-out";
        } else {
          task.current.style.opacity = 1;
          task.current.style.transition = "opacity 0.1s ease";
        }
      }
    };

    window.addEventListener("scroll", funn);

    return () => {
      window.removeEventListener("scroll", funn);
    };
  }, []);

  return (
    <div className="container" ref={task}>
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
  );
};

export default Header;
