import React from "react";
import Knight from "./Knight";
import "../css/Square.css";
import { connect } from "react-redux";
import { useDrop } from "react-dnd";
import itemTypes from "./dndTypes";
import { setPosition } from "../redux/actions";

function Square({ isBlack, hasKnight, x, y, setPosition }) {
  const [{ isOver }, dropID] = useDrop({
    accept: itemTypes.KNIGHT,
    drop: () => setPosition([x, y]),
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  let backgroundColor;
  if (isOver) backgroundColor = "red";
  else backgroundColor = isBlack ? "black" : "white";

  let knightColor = isBlack ? "white" : "black";

  let contents = hasKnight ? <Knight color={knightColor} /> : null;

  return (
    <div
      className="Square"
      style={{
        backgroundColor
      }}
      ref={dropID}
    >
      {contents}
    </div>
  );
}

export default connect(null, { setPosition })(Square);
