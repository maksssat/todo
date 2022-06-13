import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedDate } from "../../Redux/date/dateSlice";
import { remove, complete, selectTodo, edit } from "../../Redux/todo/todoSlice";
import classNames from "classnames";

export default function TodoList({ completed }) {
  const date = useSelector(selectedDate);
  const state = useSelector(selectTodo);

  const dispatch = useDispatch();

  function handleComplete(e) {
    dispatch(complete({ date, id: e.target.dataset.id }));
  }

  function handleRemove(e) {
    dispatch(remove({ date, id: e.target.closest("button").dataset.id }));
  }

  function handleEdit(e) {
    dispatch(edit());
  }

  const todoItemTextClass = classNames("todo-item-text", { completed: completed });

  return (
    <ul className="todo-list">
      {!state[date] ||
      state[date].filter((item) => (completed ? item.completed : !item.completed)).length === 0
        ? "Нет дел"
        : state[date]
            .filter((item) => (completed ? item.completed : !item.completed))
            .map((item) => (
              <li className="todo-item" key={item.id}>
                <input data-id={item.id} type="checkbox" onClick={handleComplete} />
                <p className={todoItemTextClass}>{item.text}</p>
                <button className="todo-item-edit" data-id={item.id} onClick={handleEdit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                  </svg>
                </button>
                <button className="todo-item-remove" data-id={item.id} onClick={handleRemove}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.7.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </li>
            ))}
    </ul>
  );
}
