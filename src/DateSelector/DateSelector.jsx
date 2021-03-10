import React from "react";
import { useTodo, MONTH_DECREMENT, MONTH_INCREMENT } from "../TodoContext";
import "./DateSelector.css";

export default function DateSelector() {
  const { selectedDateObj, dispatch, state } = useTodo();

  return (
    <section className="date-selector">
      <button
        className="date-selector-button"
        onClick={() => dispatch({ type: MONTH_DECREMENT })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="35"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      </button>
      <button
        className="date-selector-button"
        onClick={() => dispatch({ type: MONTH_INCREMENT })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="35"
          fill="currentColor"
          class="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </button>
      <div className="date-display">{`${selectedDateObj.toLocaleDateString(
        "ru-Ru",
        { month: "long" }
      )} ${state.year}`}</div>
    </section>
  );
}
