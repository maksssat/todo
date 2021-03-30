import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { selectDaysArr, selectDate } from "../../Redux/date/dateSlice";
import { selectTodo } from "../../Redux/todo/todoSlice";
import "./Calendar.css";

const weekDaysArr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const monthArr = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export default function Calendar() {
  const state = useSelector(selectTodo);
  const daysToRender = useSelector(selectDaysArr);
  const dispatch = useDispatch();

  function handleOnCalendarClick(e) {
    dispatch(selectDate(e.target.closest(".calendar-item").dataset.date));
  }

  return (
    <section className="calendar" onClick={handleOnCalendarClick}>
      {daysToRender.map(({ day, month, year, today, currentMonth }, id) => {
        const currentDayStr = `${day} ${monthArr[month]} ${year}`;
        const calendarItemClass = classNames("calendar-item", {
          "current-month": currentMonth,
          today: today,
        });

        return (
          <div className={calendarItemClass} key={`${day} ${id}`} data-date={currentDayStr}>
            {id < 7 ? <div className="calendar-weekday">{weekDaysArr[id]}</div> : null}

            <span className="calendar-day">{day}</span>

            {state[currentDayStr] ? (
              <div className="calendar-text">
                {state[currentDayStr].map((item, id) => {
                  return id < 3 ? <p>{item.text}</p> : null;
                })}
                {state[currentDayStr].length > 3 ? (
                  <p>Еще {7 - state[currentDayStr].length} элементов</p>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
