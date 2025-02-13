import React, { useState } from "react";
import "./uploadFile.css";
import IconFile from "../../img/iconFile.png";

export default function UploadFile() {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    console.log(files);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  return (
    <div className="UploadFile">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="UploadFileArea">
              <div
                className="drop-area"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className='"drop-icon"'>
                  <img src={IconFile} alt="IconFile" />
                </div>{" "}
                <h4 className="drop-text"> Drag and drop your file here </h4>{" "}
                <p> PNG, JPG, GIF, video or any file up to 100 MB </p>{" "}
                <label htmlFor="file" className="browse-button">
                  Browse{" "}
                </label>{" "}
                <input id="file" type="file" onChange={handleFileChange} />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
