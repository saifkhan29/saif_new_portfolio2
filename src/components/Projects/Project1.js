import React from "react";
import "./Project1.css";
import "./Project_1.css";

export default function Project1(props) {
  return (
    <div>
      <div className="p1_container">
        <div className="pCardHolder">
          <div className="pCard">
            <div className="pImgBox">
              <img src={props.url} alt="img" />
            </div>
            <div className="pContent">
              <h4>{props.title}</h4>
              <button className="pButton">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
