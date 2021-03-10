import React from "react";
import { useTodo, MONTH_DECREMENT, MONTH_INCREMENT } from "../TodoContext";

export default function DateSelector() {
  const { selectedDateObj, dispatch, state } = useTodo();

  return (
    <section className="date-selector">
      <button onClick={() => dispatch({ type: MONTH_DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: MONTH_INCREMENT })}>+</button>
      <div className="date-display">{`${selectedDateObj.toLocaleDateString(
        "ru-Ru",
        { month: "long" }
      )} ${state.year}`}</div>
    </section>
  );
}
