import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { selectedDate } from "../../Redux/date/dateSlice";
import useDeviceDetect from "../Hooks/useDeviceDetect";
import "./Todo.css";

export default function Todo() {
  const date = useSelector(selectedDate);
  const isMobile = useDeviceDetect();

  return (
    <section className="todo">
      {isMobile || <h2 className="todo-header">{date}</h2>}
      <TodoInput date={date} isMobile={isMobile} />
      <div className="todo-content">
        <h3>Невыполненные</h3>
        <TodoList completed={false} date={date} isMobile={isMobile} />
        <h3>Выполненные</h3>
        <TodoList completed={true} date={date} isMobile={isMobile} />
      </div>
    </section>
  );
}
