import React from "react";
import Buttons from "../../common/btn/Buttons";
import "./forms.css";
export default function Forms() {
  return (
    <>
      <div className="Forms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-2">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter item name"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://yoursite.com/item/123"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="form-group">
                <label>Your Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Number"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Select Subject"
                />
              </div>
            </div>
            <div className="col-lg-12 mb-2">
              <div className="form-group">
                <label>description</label>
                <textarea
                  className="form-control"
                  placeholder="provide a detailed description of your item"
                  rows="7"
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12 text-end b-group mb-4">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
