import React from "react";
import { Routes, Route } from "react-router-dom";
import DateSelector from "./Components/DateSelector/DateSelector";
import Calendar from "./Components/Calendar/Calendar";
import Todo from "./Components/Todo/Todo";
import "./App.css";
import EditTodo from "./Components/Todo/EditTodo";

function App() {
  return (
    <div className="App">
      <DateSelector />
      <Routes>
        <Route path="/" element={<Calendar />}>
          <Route index element={<Todo />} />
          <Route path="calendar/edit/:date/:todoId" element={<EditTodo />} />
        </Route>
        <Route path="todo" element={<Todo />} />
        <Route path="todo/edit/:date/:todoId" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
