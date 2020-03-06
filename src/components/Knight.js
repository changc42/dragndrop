import React from "react";
import "../css/Knight.css";
import { useDrag } from "react-dnd";
import itemTypes from "./dndTypes";

function Knight({ color }) {
  const [{ isDragging }, dragID] = useDrag({
    item: { type: itemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <span style={{ color }} className={Knight} ref={dragID}>
      ♘
    </span>
  );
}

export default Knight;
