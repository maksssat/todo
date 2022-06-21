import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedDate } from "../../Redux/date/dateSlice";
import { add } from "../../Redux/todo/todoSlice";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState("");

  const date = useSelector(selectedDate);
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    if (inputValue !== "") {
      dispatch(add(date, inputValue));
      setInputValue("");
    }
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
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
      />
      <button className="todo-button" onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
}
