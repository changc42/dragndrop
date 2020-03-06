import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Knight from "./Knight";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "./redux/actions";

function App() {
  function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    let black = (x + y) % 2 === 1;
    const isKnightHere = x === knightX && y === knightY;
    const piece = isKnightHere ? <Knight /> : null;

    return (
      <div key={i} style={{ width: "12.5%", height: "80px" }}>
        <Square x={x} y={y} black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, this.props.position));
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

function mapStateToProps(state) {
  return {
    position: state.position
  };
}

export default connect(mapStateToProps, actions)(App);
