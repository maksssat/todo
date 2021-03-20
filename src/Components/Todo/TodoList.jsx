import React, { useEffect } from "react";
import { useTodo } from "../TodoContext/TodoContext";
import { useSelectedDate } from "../SelectedDateContext/SelectedDateContext";
import { complete, remove } from "../TodoContext/TodoReducer";
import "./Todo.css";

export default function TodoList({ completed }) {
  const { selectedDate } = useSelectedDate();

  const { state, dispatch } = useTodo();

  console.log("TodoList render");

  useEffect(() => {
    console.log("TodoList rendered");
  });

  function handleComplete(e) {
    dispatch(complete(selectedDate, +e.target.dataset.id));
  }

  function handleRemove(e) {
    dispatch(remove(selectedDate, +e.target.dataset.id));
  }

  return (
    <ul>
      {!state[selectedDate] ||
      state[selectedDate].filter((item) => (completed ? item.completed : !item.completed)).length === 0
        ? "Нет дел"
        : state[selectedDate]
            .filter((item) => (completed ? item.completed : !item.completed))
            .map((item) => (
              <li className="todo-item" key={item.id}>
                <input data-id={item.id} type="checkbox" onClick={handleComplete} />
                <p>{item.text}</p>
                <button data-id={item.id} onClick={handleRemove}>
                  ❌
                </button>
              </li>
            ))}
    </ul>
  );
}
