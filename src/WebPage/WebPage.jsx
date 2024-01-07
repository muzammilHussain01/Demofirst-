import React from "react";
import "./PageHeader.css";
import imageLogo from "./logo/atlassian-blue-logo-copy.png";

const WebPage = () => {
  let x = "";
  return (
    <>
      <div className="headerDiv">
        <ul className="firestList">
          <li className="atlassian">
            <img className="logoImage" src={imageLogo} alt="Header Logo" />
          </li>
          <section className="section">
            <li>
              <select>
                <option>Products</option>
              </select>
            </li>
            <li>
              <select>
                <option>Solutions</option>
              </select>
            </li>
            <li>
              <select>
                <option>Resources</option>
              </select>
            </li>
          </section>
        </ul>
        <ul className="secondList">
          <section>
            <li>
              <button className="signInButton">Sign in</button>
            </li>
            <li>Search |</li>
          </section>
        </ul>
      </div>
    </>
  );
};

export default WebPage;
