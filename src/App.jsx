import React from "react";
import { DateProvider } from "./Components/DateContext/DateContext";
import DateSelector from "./Components/DateSelector/DateSelector";
import Calendar from "./Components/Calendar/Calendar";
import Todo from "./Components/Todo/Todo";
import "./App.css";

function App() {
  return (
    <DateProvider>
      <div className="App">
        <DateSelector />
        <Calendar />
        <Todo />
      </div>
    </DateProvider>
  );
}

export default App;
