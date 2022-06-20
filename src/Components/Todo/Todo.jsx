import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { selectedDate } from "../../Redux/date/dateSlice";
import "./Todo.css";

export default function Todo() {
  const date = useSelector(selectedDate);

  return (
    <section className="todo">
      <h2 className="todo-header">{date}</h2>
      <TodoInput />
      <div className="todo-content">
        <h3>Невыполненные</h3>
        <TodoList completed={false} />
        <h3>Выполненные</h3>
        <TodoList completed={true} />
      </div>
    </section>
  );
}
