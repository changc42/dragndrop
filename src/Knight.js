import React from "react";
import { ItemTypes } from "./Constants";
import { useDrag } from "react-dnd";

function Knight() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <span ref={drag} style={{ fontSize: "50px" }}>
      ♘
    </span>
  );
}

export default Knight;
