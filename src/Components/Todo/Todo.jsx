import React, { useEffect } from "react";
import { useSelectedDate } from "../SelectedDateContext/SelectedDateContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const { selectedDate } = useSelectedDate();

  console.log("Todo render");

  useEffect(() => {
    console.log("Todo rendered");
  });

  return (
    <section className="todo">
      <h2>{selectedDate}</h2>
      <TodoInput />
      <h3>Невыполненные</h3>
      <TodoList completed={false} />
      <h3>Выполненные</h3>
      <TodoList completed={true} />
    </section>
  );
}
