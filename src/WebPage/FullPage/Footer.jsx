import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerContainer1">
          <h5>@copy-right</h5> <br />
          <h5>Authers & Source</h5> <br />
          <h5>your-seggesion</h5> <br />
          <h5>rate-us</h5>
        </div>
        <div className="footerContainer2">
          <h4> Contact-us: +91-*********80 </h4>
          <p>
            <h4>Address:</h4>
            <h6>
              e-28/1 Abrar Nagar Lucknow, Post-offic: Vikas Nagar, pin-code:
              226022
            </h6>
          </p>
          <a href="mailto:example@example.com">@mail-us</a>
        </div>
        <div className="footerContainer3">
          <h5>Our Social-Media-Handels</h5>
          <a href="https://www.facebook.com/">faceBook</a> <br />
          <a href="https://www.instagram.com/">instaGram</a> <br />
          <a href="https://twitter.com/?lang=en">twitter</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
