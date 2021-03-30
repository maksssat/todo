import React from "react";
import DateSelector from "./Components/DateSelector/DateSelector";
import Calendar from "./Components/Calendar/Calendar";
import Todo from "./Components/Todo/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DateSelector />
      <Calendar />
      <Todo />
    </div>
  );
}

export default App;
