import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Knight from "./Knight";

function App() {
  return (
    <DndProvider backend={Backend}>
      <div className="App">
        <h1>app compp</h1>
        <Knight />
      </div>
    </DndProvider>
  );
}

export default App;
