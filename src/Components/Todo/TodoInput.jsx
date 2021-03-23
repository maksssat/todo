import React, { useState } from "react";
import { useSelectedDate } from "../SelectedDateContext/SelectedDateContext";
import { useTodo } from "../TodoContext/TodoContext";
import { add } from "../TodoContext/TodoReducer";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState("");

  const { selectedDate } = useSelectedDate();
  const { dispatch } = useTodo();

  console.log("TodoInput rendered");

  function handleClick() {
    const id = Math.random() * 100;
    dispatch(add(selectedDate, id, inputValue));
    setInputValue("");
  }

  function handleEnterPress(e) {
    if (e.code === "Enter") {
      const id = Math.random() * 100;
      dispatch(add(selectedDate, id, inputValue));
      setInputValue("");
    }
  }

  return (
    <div className="todo-form">
      <input
        className="todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleEnterPress}
      />
      <button className="todo-submit" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
