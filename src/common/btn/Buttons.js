import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <>
      <button className="Main-button">
        {" "}
        <Link to="/Contact">Connect us</Link>
      </button>
    </>
  );
}
