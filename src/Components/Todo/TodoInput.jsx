import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../../Redux/todo/todoSlice";

export default function TodoInput({ date, isMobile }) {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick(e) {
    if (inputValue !== "") {
      e.preventDefault();
      dispatch(add(date, inputValue));
      setInputValue("");
    }
  }

  function handleEnterPress(e) {
    if (e.code === "Enter") {
      handleClick();
    }
  }

  return (
    <form className="todo-form">
      <input
        className="todo-input"
        type="text"
        value={inputValue}
        placeholder={"Введите текст"}
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
        required
      />
      <button className="todo-button" onClick={handleClick}>
        Добавить
      </button>
      {isMobile && (
        <Link to="/" className="todo-button">
          Отмена
        </Link>
      )}
    </form>
  );
}
