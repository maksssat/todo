import React, { useEffect } from "react";
import { useDate } from "../DateContext/DateContext";
import { MONTH_DECREMENT, MONTH_INCREMENT } from "../DateContext/DateReducer";
import "./DateSelector.css";

const monthArr = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

export default function DateSelector() {
  const {
    dispatch,
    state: { month, year },
  } = useDate();

  console.log("DateSelector render");

  useEffect(() => {
    console.log("DateSelector rendered");
  });

  return (
    <section className="date-selector">
      <button
        className="date-selector-button"
        onClick={() => dispatch({ type: MONTH_DECREMENT })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="36"
          fill="currentColor"
          className="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
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
          height="36"
          fill="currentColor"
          className="bi bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </button>
      <div className="date-display">{`${monthArr[month]} ${year}`}</div>
    </section>
  );
}
