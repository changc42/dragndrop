import React from "react";
import Knight from "./Knight";
import "./css/Square.css";

function Square({ isBlack, hasKnight, dropID, dragID, dropProps }) {
  function getBackgroundColor() {
    if (dropProps.isOver) return "red";
    if (isBlack) return "black";
    return "white";
  }

  let contents = hasKnight ? <Knight ref={dragID} /> : null;

  return (
    <div
      className="Square"
      style={{
        backgroundColor: getBackgroundColor()
      }}
      ref={dropID}
    >
      {contents}
    </div>
  );
}

export default Square;
