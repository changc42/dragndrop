import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Knight from "./Knight";
import Square from "./Square";

function App() {
  let [knightPosition, setKnightPosition] = useState([0, 0]);

  function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    let black = (x + y) % 2 === 1;
    const isKnightHere = x === knightX && y === knightY;
    const piece = isKnightHere ? <Knight /> : null;

    return (
      <div key={i} style={{ width: "12.5%", height: "80px" }}>
        <Square x={x} y={y} black={black} setKnightPosition={setKnightPosition}>
          {piece}
        </Square>
      </div>
    );
  }

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={Backend}>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}

export default App;
