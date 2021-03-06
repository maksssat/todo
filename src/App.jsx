import React from "react";
import Calendar from "./calendar/Calendar";
import Todo from "./todo/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Calendar />
      <Todo />
    </div>
  );
}

export default App;
