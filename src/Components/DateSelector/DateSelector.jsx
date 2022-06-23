import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  monthDecrement,
  monthIncrement,
  selectMonth,
  selectYear,
  dayDecrement,
  dayIncrement,
  selectDay,
  monthArr as monthArrForTodo,
} from "../../Redux/date/dateSlice";
import { useMatch } from "react-router-dom";
import useDeviceDetect from "../Hooks/useDeviceDetect";
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
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);
  const day = useSelector(selectDay);

  const dispatch = useDispatch();

  const matchTodo = useMatch({ path: "/todo" });

  const matchEdit = useMatch({ path: "/todo/edit/*" });

  const isMobile = useDeviceDetect();

  function handlePrevClick() {
    if (isMobile && matchTodo) dispatch(dayDecrement());
    else dispatch(monthDecrement());
  }

  function handleNextClick() {
    if (isMobile && matchTodo) dispatch(dayIncrement());
    else dispatch(monthIncrement());
  }

  let content;

  if (isMobile && matchTodo !== null) {
    content = <div className="date-display">{`${day} ${monthArrForTodo[month]} ${year}`}</div>;
  } else if (isMobile && matchEdit !== null) {
    content = <div className="date-display">{`Изменение задачи`}</div>;
  } else {
    content = <div className="date-display">{` ${monthArr[month]} ${year}`}</div>;
  }

  return (
    <section className="date-selector">
      {matchEdit === null && (
        <>
          <button className="date-selector-button" onClick={handlePrevClick}>
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
          <button className="date-selector-button" onClick={handleNextClick}>
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
        </>
      )}
      {content}
    </section>
  );
}
