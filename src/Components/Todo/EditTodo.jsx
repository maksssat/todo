import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit, selectTodoById } from "../../Redux/todo/todoSlice";
import useDeviceDetect from "../Hooks/useDeviceDetect";

export default function EditTodo() {
  const { todoId, date } = useParams();
  const todo = useSelector((state) => selectTodoById(state, date, todoId));
  const [inputValue, setInputValue] = useState(todo.text);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobile = useDeviceDetect();

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSaveClick(e) {
    if (inputValue !== "") {
      e.preventDefault();
      dispatch(edit({ date, text: inputValue, id: todoId, completed: todo.completed }));
      if (isMobile) navigate("/todo");
      else navigate("/");
    }
  }

  function handleEnterPress(e) {
    if (e.code === "Enter") {
      handleSaveClick();
    }
  }

  function handleCancelClick() {
    if (isMobile) navigate("/todo");
    else navigate("/");
  }

  return (
    <section className="todo">
      <h2 className="todo-header">{date}</h2>
      <form className="todo-form">
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleEnterPress}
          required
        />
        <div className="button-wrapper">
          <button className="todo-button" onClick={handleSaveClick}>
            Сохранить
          </button>
          <button className="todo-button" onClick={handleCancelClick}>
            Отменить
          </button>
        </div>
      </form>
    </section>
  );
}
