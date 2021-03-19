import React from "react";
import { DateProvider } from "./Components/DateContext/DateContext";
import { TodoProvider } from "./Components/TodoContext/TodoContext";
import { SelectedDateProvider } from "./Components/SelectedDateContext/SelectedDateContext";
import DateSelector from "./Components/DateSelector/DateSelector";
import Calendar from "./Components/Calendar/Calendar";
import Todo from "./Components/Todo/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DateProvider>
        <SelectedDateProvider>
          <TodoProvider>
          <DateSelector />
          <Calendar />
            <Todo />
          </TodoProvider>
        </SelectedDateProvider>
      </DateProvider>
    </div>
  );
}

export default App;
