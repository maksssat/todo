import React, { useContext, useReducer } from "react";

const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

const today = new Date();

// initial state
const initialState = {
  month: today.getMonth(),
  year: today.getFullYear(),
};

// action types
export const MONTH_DECREMENT = "monthDecrement";
export const MONTH_INCREMENT = "monthIncrement";

// reducer
function reducer(state, action) {
  switch (action.type) {
    case MONTH_DECREMENT:
      if (state.month === 0) {
        return { ...state, month: 11, year: state.year - 1 };
      }
      return { ...state, month: state.month - 1 };
    case MONTH_INCREMENT:
      if (state.month === 11) {
        return { ...state, month: 0, year: state.year + 1 };
      }
      return { ...state, month: state.month + 1 };

    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // объект Date из выбранной даты
  const selectedDateObj = new Date(state.year, state.month);

  //количество дней в текущем месяце
  const daysInSelectedMonth = new Date(
    state.year,
    state.month + 1,
    0
  ).getDate();

  //количество дней в предыдущем месяце
  const daysInPrevMonth = new Date(state.year, state.month, 0).getDate();

  // день недели первого дня месяца
  const weekDayStart = selectedDateObj.getDay();
  // день недели последнего дня месяца
  const weekDayEnd = new Date(state.year, state.month + 1, 0).getDay();

  //массив из дней текущего месяца
  const daysArrCurrMonth = Array.from(
    { length: daysInSelectedMonth },
    (_, index) => index + 1
  );

  //получение массива дней конца предыдущего месяца
  const getDaysToPrepend = () => {
    const arr = [];
    let day = daysInPrevMonth;

    if (weekDayStart === 0) {
      for (let i = 1; i < 7; i++) {
        arr.unshift(day);
        day--;
      }
    } else {
      for (let i = 1; i < weekDayStart; i++) {
        arr.unshift(day);
        day--;
      }
    }

    return arr;
  };

  const daysArrToPrepend = getDaysToPrepend();

  // получение массива дней начала следующего месяца
  const getDaysToAppend = () => {
    const arr = [];

    if (weekDayEnd === 0) return arr;
    else {
      for (let i = 1; i <= 7 - weekDayEnd; i++) {
        arr.push(i);
      }
    }

    return arr;
  };

  const daysArrToAppend = getDaysToAppend();

  const daysArrToRender = [
    ...daysArrToPrepend,
    ...daysArrCurrMonth,
    ...daysArrToAppend,
  ];

  console.log("TodoProvider render");

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        daysArrToRender,
        selectedDateObj,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
