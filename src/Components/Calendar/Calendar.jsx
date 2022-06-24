import React, { useEffect } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDaysArr,
  selectDate,
  today,
  monthArr,
  monthDecrement,
  monthIncrement,
} from "../../Redux/date/dateSlice";
import { selectTodos } from "../../Redux/todo/todoSlice";
import "./Calendar.css";
import { Outlet, useNavigate } from "react-router-dom";
import useDeviceDetect from "../Hooks/useDeviceDetect";

const weekDaysArr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

let touchstartX = 0;
let touchendX = 0;

export default function Calendar() {
  const todos = useSelector(selectTodos);
  const daysToRender = useSelector((state) => selectDaysArr(state, today));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobile = useDeviceDetect();

  function handleTouchStart(e) {
    touchstartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchendX = e.changedTouches[0].screenX;
    if (touchendX < touchstartX) dispatch(monthIncrement());
    if (touchendX > touchstartX) dispatch(monthDecrement());
  }

  useEffect(() => {
    const calendar = document.querySelector(".calendar");
    calendar.addEventListener("touchstart", handleTouchStart);
    calendar.addEventListener("touchend", handleTouchEnd);
    return () => {
      calendar.removeEventListener("touchstart", handleTouchStart);
      calendar.removeEventListener("touchend", handleTouchEnd);
    };
  });

  function handleOnCalendarClick(e) {
    dispatch(selectDate(e.target.closest(".calendar-item").dataset.date));
    const currentSelectedDay = document.querySelector(".selected");
    if (currentSelectedDay !== null) currentSelectedDay.classList.remove("selected");
    const selectedDay = e.target.closest(".calendar-item");
    selectedDay.classList.add("selected");
    if (isMobile) navigate("todo");
  }

  return (
    <>
      <section className="calendar" onClick={handleOnCalendarClick}>
        {daysToRender.map(({ day, month, year, today, currentMonth }, id) => {
          const currentDayStr = `${day} ${monthArr[month]} ${year}`;
          const uncompletedTodosArr = todos[currentDayStr]
            ? Object.values(todos[currentDayStr]).filter((todo) => todo.completed === false)
            : null;
          const calendarItemClass = classNames("calendar-item", {
            "current-month": currentMonth,
            today: today,
          });

          return (
            <div
              className={calendarItemClass}
              key={`${day}${month}${year}`}
              data-date={`${day} ${month} ${year}`}
            >
              {id < 7 ? <div className="calendar-weekday">{weekDaysArr[id]}</div> : null}

              <span className="calendar-day">{day}</span>

              {uncompletedTodosArr !== null ? (
                <div className="calendar-text">
                  {uncompletedTodosArr
                    .filter((todo) => todo.completed === false)
                    .map((todo, id) => {
                      if (id >= 3) return null;
                      return <p key={todo.id}>{todo.text}</p>;
                    })}
                  {uncompletedTodosArr.length > 3 ? (
                    <p>Еще {uncompletedTodosArr.length - 3} элемента (-ов)</p>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </section>
      {isMobile || <Outlet />}
    </>
  );
}
