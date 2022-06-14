import React from "react";
import DateSelector from "./Components/DateSelector/DateSelector";
import Calendar from "./Components/Calendar/Calendar";
import Todo from "./Components/Todo/Todo";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <DateSelector />
        <Calendar />
        <Todo />
      </div>
    </React.StrictMode>
  );
}

export default App;
