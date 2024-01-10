import React from "react";
import "./PageHeader.css";
import jiraLogo from "./logo/jira-logo-C71F8C0324-seeklogo.png";
import tralloLogo from "./logo/trallo-logo.png";
import managementLogo from "./logo/jira-sarvice-management-logo.png";
import confluanceLogo from "./logo/confluance-logo.jpeg";

const Products = (props) => {
  console.log("Products props", props);
  let divStyle = {};
  if (props.divVisible) {
    divStyle = {
      display: "!block",
      transition: "opacity 0.2s ease-in-out",
    };
  } else {
    divStyle = {
      opacity: props.divVisible ? 1 : 0,
      overflow: "hidden",
      transition: "opacity 0.2s ease-in",
    };
  }

  return (
    <>
      <div className="productsDiv" style={divStyle}>
        <div className="firestDiv">FEATURED</div>
        <div className="thirdDiv">
          <img src={jiraLogo} alt="jiraLogo" />
          <ul>
            <li>Trello</li>
            <li>
              <section>Visual project management</section>
            </li>
          </ul>
        </div>
        <div className="forthdDiv">
          <img src={confluanceLogo} alt="jiraLogo" />
          <ul>
            <li>Trello</li>
            <li>
              <section>Visual project management</section>
            </li>
          </ul>
        </div>

        <div className="secondDiv">
          <div className="secondDivFirest">WHAT'S NEW</div>

          <div className="secondDivSecond">
            <img src={jiraLogo} alt="" />
          </div>
          <div className="secondDivThird">
            <ul>
              <li>Compass</li>
              <li>
                <section>Developer Experience Platform</section>
              </li>
            </ul>
          </div>
          <div className="secondDivForth">
            <ul>
              <li>Jira Product Discovery</li>
              <li>
                <section>Prioritization and roadmapping</section>
              </li>
            </ul>
          </div>
          <div className="secondDivFifth">
            <img src={jiraLogo} alt="" />
          </div>
          <div className="secondDivSixth">
            View all <span className="arrow">&rarr;</span>
          </div>
          <div className="secondDivSeven">
            <br /> <br />
            YOU MIGHT FIND HELPFUL <br /> <br />
            Cloud Product Roadmap <br /> <br />
            Atlassian Migration Program
          </div>
        </div>
        <div className="fifthDiv">
          <img src={managementLogo} alt="jiraLogo" />
          <ul>
            <li>Confluencev</li>
            <li>
              <section>Content collaboration</section>
            </li>
          </ul>
        </div>
        <div className="sixthDiv">
          <img src={tralloLogo} alt="jiraLogo" />
          <ul>
            <li>Trello</li>
            <li>
              <section>Visual project management</section>
            </li>
          </ul>
        </div>
        <div className="seventhDiv">
          View all products <span className="arrow">&rarr;</span>
        </div>
        <div className="earthDiv">
          <ul>
            <li>Marketplace</li>
            <br />
            <li>
              <section>
                Connect thousands of apps and integrations for all your
                Atlassian products
              </section>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
