import React from "react";
import { useDate } from "../DateContext/DateContext";
import "./Calendar.css";

const weekDaysArr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export default function Calendar() {
  const { daysToRender } = useDate();

  function handleOnCalendarClick(e) {
    console.dir(e.target.dataset.date);
  }

  console.log("Calendar rendered");

  return (
    <section className="calendar">
      <div className="calendar-header">
        {weekDaysArr.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="calendar-body" onClick={handleOnCalendarClick}>
        {daysToRender.map(({ day, month, year, today, currentMonth }, id) => (
          <div
            className={`calendar-item ${currentMonth ? "current-month" : ""} ${
              today ? "today" : ""
            }`}
            key={`${day} ${id}`}
            data-date={`${year}-${month}-${day}`}
          >
            {day}
          </div>
        ))}
      </div>
    </section>
  );
}
