import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { selectDaysArr, selectDate, today } from "../../Redux/date/dateSlice";
import { selectTodos } from "../../Redux/todo/todoSlice";
import "./Calendar.css";
import { Outlet, useNavigate } from "react-router-dom";
import useDeviceDetect from "../Hooks/useDeviceDetect";

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
  const todos = useSelector(selectTodos);
  const daysToRender = useSelector((state) => selectDaysArr(state, today));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobile = useDeviceDetect();

  function handleOnCalendarClick(e) {
    dispatch(selectDate(e.target.closest(".calendar-item").dataset.date));
    if (isMobile) navigate("todo");
  }

  return (
    <>
      <section className="calendar" onClick={handleOnCalendarClick}>
        {daysToRender.map(({ day, month, year, today, currentMonth }, id) => {
          const currentDayStr = `${day} ${monthArr[month]} ${year}`;
          const todosArr = todos[currentDayStr] ? Object.values(todos[currentDayStr]) : null;
          const calendarItemClass = classNames("calendar-item", {
            "current-month": currentMonth,
            today: today,
          });

          return (
            <div className={calendarItemClass} key={`${day}${month}${year}`} data-date={currentDayStr}>
              {id < 7 ? <div className="calendar-weekday">{weekDaysArr[id]}</div> : null}

              <span className="calendar-day">{day}</span>

              {todosArr !== null ? (
                <div className="calendar-text">
                  {todosArr.map((item, id) => {
                    if (id >= 3) return null;
                    return <p key={item.id}>{item.text}</p>;
                  })}
                  {todosArr.length > 3 ? <p>Еще {todosArr.length - 3} элемента (-ов)</p> : null}
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
