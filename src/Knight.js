import React from "react";
import "./css/Knight.css";

function Knight({ dragID }) {
  return (
    <span ref={dragID} style={{ fontSize: "50px" }}>
      ♘
    </span>
  );
}

export default Knight;
