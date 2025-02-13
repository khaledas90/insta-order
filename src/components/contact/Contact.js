import React from "react";
import UploadFile from "../uploadFile/UploadFile";
import Forms from "../forms/Forms";

export default function Contact() {
  return (
    <>
      <div className="Contact mt-5">
        <div className="container">
          <UploadFile />
          <Forms />
        </div>
      </div>
    </>
  );
}
