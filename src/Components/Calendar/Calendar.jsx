import React, { useEffect } from "react";
import { useDate } from "../DateContext/DateContext";
import { useSelectedDate } from "../SelectedDateContext/SelectedDateContext";
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

export default function Calendar({ setDate }) {
  const { daysToRender } = useDate();
  const { setSelectedDate } = useSelectedDate();

  function handleOnCalendarClick(e) {
    setSelectedDate(e.target.dataset.date);
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
        {daysToRender.map(({ day, month, year, today, currentMonth }, id) => (
          <div
            className={`calendar-item ${currentMonth ? "current-month" : ""} ${
              today ? "today" : ""
            }`}
            key={`${day} ${id}`}
            data-date={`${day} ${monthArr[month]} ${year}`}
          >
            {day}
          </div>
        ))}
      </div>
    </section>
  );
}
