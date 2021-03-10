import React from "react";
import { useTodo } from "../TodoContext";
import "./style.css";

const weekDaysArr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export default function Calendar() {
  const { daysArrToRender } = useTodo();

  // console.log(daysToRender);

  return (
    <section className="calendar">
      <div className="calendar-header">
        {weekDaysArr.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="calendar-body">
        {daysArrToRender.map((item, id) => (
          <div className="calendar-item" key={`${item} ${id}`}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
