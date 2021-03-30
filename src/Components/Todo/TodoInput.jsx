import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedDate } from "../../Redux/date/dateSlice";
import { add } from "../../Redux/todo/todoSlice";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState("");

  const date = useSelector(selectedDate);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(add(date, inputValue));
    setInputValue("");
  }

  function handleEnterPress(e) {
    if (e.code === "Enter") {
      dispatch(add(date, inputValue));
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
        Добавить
      </button>
    </div>
  );
}
