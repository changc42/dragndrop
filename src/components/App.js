import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import Knight from "./Knight";
import Square from "./Square";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import "../css/App.css";

function App({ position }) {
  //renders a single square
  function renderSquare(x, y, position) {
    let isBlack = (x + y) % 2 === 1;
    const hasKnight = x === position[0] && y === position[1];

    return <Square x={x} y={y} isBlack={isBlack} hasKnight={hasKnight} />;
  }

  const squares = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      squares.push(renderSquare(i, j, position));
    }
  }

  return (
    <DndProvider backend={Backend}>
      <div className="App">{squares}</div>
    </DndProvider>
  );
}

function mapStateToProps(state) {
  return {
    position: state.position,
  };
}

export default connect(mapStateToProps)(App);
