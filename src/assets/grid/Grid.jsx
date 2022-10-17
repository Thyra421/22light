import React from "react";
import "./grid.css";

export default function Grid(props) {
  console.log(props);
  return (
      <div className="grid-container">
        <img src={props.picture} className="grid-picture" alt="pics" />
        <span className="grid-span">
          <div className="grid-text"> {props.content}</div>
          <a href={props.link} className="grid-ref">
            check it out
          </a>
        </span>
      </div>
  );
}
