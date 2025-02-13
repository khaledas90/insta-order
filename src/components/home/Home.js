import React from "react";
import imgHome from "../../img/Group-home.png";
import imgBottomHome from "../../img/Milky Way.png";
import Buttons from "../../common/btn/Buttons";
import About from "../about/About";
import "./home.css";

import Contact from "../contact/Contact";
import Explore from "../Explore/Explore";
import BEpartner from "../BePartner/BePartner.js";
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 textContainer text-left">
              <div className="content">
                <h1>
                  Find out what's new with <br /> us and get in touch with
                  <br /> INSTA ORDER
                </h1>
                <p>
                  Shihami is the World’s first and largest NFT/Avatar
                  marketplace
                </p>
                <Buttons />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-container">
                <img src={imgHome} alt="img Home" />
              </div>
            </div>
          </div>
        </div>
        <div className="img-home">
          <img src={imgBottomHome} alt="img Milky Way Home" />
        </div>
        <div className="bg-left">
          <About />
          <Explore />
          <BEpartner />
          <Contact />
        </div>
      </div>
    </>
  );
}
