import React from "react";
import "./PageHeader.css";
import imageLogo from "./logo/atlassian-blue-logo-copy.png";
import downArrow from "./logo/downArrow.png";
import searchLogo from "./logo/searchIcon.png";

const WebPage = (props) => {
  console.log("web props", props);
  return (
    <>
      <div className="headerDiv">
        <ul className="firestList">
          <li className="atlassian">
            <img className="logoImage" src={imageLogo} alt="Header Logo" />
          </li>
          <section className="section">
            <li>
              <button className="productButton" onClick={props.toggleDiv}>
                Products &nbsp;
                <img src={downArrow} alt="down arrow" />
              </button>
            </li>
            <li>
              <button className="productButton" onClick={props.toggleDiv}>
                Solutions &nbsp;
                <img src={downArrow} alt="down arrow" />
              </button>
            </li>
            <li>
              <button className="productButton" onClick={props.toggleDiv}>
                Resources &nbsp;
                <img src={downArrow} alt="down arrow" />
              </button>
            </li>
          </section>
        </ul>
        <ul className="secondList">
          <section>
            <li>
              <button className="signInButton">Sign in</button>
            </li>
            <li>
              <img src={searchLogo} alt="search icon" className="searchIcon" />|
            </li>
          </section>
        </ul>
      </div>
    </>
  );
};

export default WebPage;
