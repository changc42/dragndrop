import React from "react";
import Knight from "./Knight";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";

export default function Square({ x, y, black, children, setKnightPosition }) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => setKnightPosition([x, y]),
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  function getBackgroundColor() {
    if (isOver) return "red";
    if (black) return "black";
    return "white";
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: getBackgroundColor(),
        color: black ? "white" : "black",
        outline: "1px solid"
      }}
      ref={drop}
    >
      {children}
    </div>
  );
}
