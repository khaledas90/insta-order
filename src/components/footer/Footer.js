import React from "react";
import "./footer.css";
import Logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faFacebook,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo-section d-flex align-items-center">
              <img src={Logo} alt="logo-img" />
              <h2 className="ms-2">INSTA ORDER</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="description-section">
              <p className="description">
                I insta Orders the world’s leading marketplace where you can
                discover, sell and bid NFTs and get rich
              </p>
              <div className="social-icons">
                <a href="www.insta.com">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="www.insta.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="www.insta.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="www.insta.com">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
              </div>
              <p className="mt-4">All rights reserved @Allsafe</p>
            </div>
          </div>
          <div className="col-lg-3 links">
            <h4>Links</h4>
            <a href="www.insta.com">Home</a>
            <a href="www.insta.com">About us</a>
            <a href="www.insta.com">Be A Partner</a>
          </div>
          <div className="col-lg-3 contact">
            <h4>Contact Us</h4>
            <p>Contact</p>
            <p>+20 101212111</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
