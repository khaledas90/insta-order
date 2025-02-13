import React from "react";
import "../../App.css";
import "./about.css";
import imgAbout from "../../img/Group 169.png";
export default function About() {
  return (
    <>
      <div className="About">
        <div className="container">
          <div className="content_head">
            <p>Explore Insta Order</p>
            <h1>About Insta Order</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="content contentTop">
                <h4 className="text-white ">About US</h4>
                <p>
                  Instaorder are individual tokens with valuable information
                  stored in them. Because they hold a value primarily set by the
                  market and demand, they can be bought and sold just like other
                  physical types of art. NFTs' unique data makes it easy to
                  verify and validate their ownership and the transfer of tokens
                  between owners. What You Need to Know. NFTs are unique
                  cryptographic tokens that exist on a blockchain and cannot be
                  replicated. NFTs can represent real-world items like artwork
                  and real estate. "Tokenizing" these real-world tangible assets
                  makes buying, selling, and trading them more efficient while
                  reducing the probability of fraud.
                </p>
              </div>
              <div className="content">
                <h4 className="text-white ">About US</h4>
                <p>
                  Instaorder are individual tokens with valuable information
                  stored in them. Because they hold a value primarily set by the
                  market and demand, they can be bought and sold just like other
                  physical types of art. NFTs' unique data makes it easy to
                  verify and validate their ownership and the transfer of tokens
                  between owners. What You Need to Know. NFTs are unique
                  cryptographic tokens that exist on a blockchain and cannot be
                  replicated. NFTs can represent real-world items like artwork
                  and real estate. "Tokenizing" these real-world tangible assets
                  makes buying, selling, and trading them more efficient while
                  reducing the probability of fraud.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-about">
                <img src={imgAbout} alt="img about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
