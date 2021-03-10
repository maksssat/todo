import React from "react";
import { TodoProvider } from "./TodoContext";
import Calendar from "./calendar/Calendar";
import Todo from "./Todo/Todo";
import "./App.css";
import DateSelector from "./DateSelector/DateSelector";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <DateSelector />
        <Calendar />
        <Todo />
      </div>
    </TodoProvider>
  );
}

export default App;
