import React, { useEffect } from "react";
import { useDate } from "../DateContext/DateContext";
import { useSelectedDate } from "../SelectedDateContext/SelectedDateContext";
import { useTodo } from "../TodoContext/TodoContext";
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
  const { daysToRender } = useDate();
  const { setSelectedDate } = useSelectedDate();
  const { state } = useTodo();

  function handleOnCalendarClick(e) {
    setSelectedDate(e.target.closest(".calendar-item").dataset.date);
  }

  console.log("Calendar render");

  useEffect(() => {
    console.log("Calendar rendered");
  });

  return (
    <section className="calendar">
      <div className="calendar-header">
        {weekDaysArr.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="calendar-body" onClick={handleOnCalendarClick}>
        {daysToRender.map(({ day, month, year, today, currentMonth }, id) => {
          const currentDayStr = `${day} ${monthArr[month]} ${year}`;

          return (
            <div
              className={`calendar-item${currentMonth && " current-month"}${today && " today"}`}
              key={`${day} ${id}`}
              data-date={currentDayStr}
            >
              <div>{day}</div>
              {state[currentDayStr] ? (
                <div>
                  {state[currentDayStr].map((item, id) => {
                    return id < 3 ? <p>{item.text}</p> : null;
                  })}
                  {state[currentDayStr].length > 3
                    ? `Еще ${7 - state[currentDayStr].length} элементов`
                    : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
