import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getDaysToRender } from "./getDaysToRender";

export const today = new Date();

export const monthArr = [
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

const dateSlice = createSlice({
  name: "date",
  initialState: {
    selectedDay: today.getDate(),
    selectedMonth: today.getMonth(),
    selectedYear: today.getFullYear(),
  },
  reducers: {
    monthDecrement(state) {
      if (state.selectedMonth === 0) {
        state.selectedMonth = 11;
        state.selectedYear = state.selectedYear - 1;
      } else state.selectedMonth = state.selectedMonth - 1;
    },
    monthIncrement(state) {
      if (state.selectedMonth === 11) {
        state.selectedMonth = 0;
        state.selectedYear = state.selectedYear + 1;
      } else {
        state.selectedMonth = state.selectedMonth + 1;
      }
    },
    selectDate(state, action) {
      const dateArr = action.payload.split(" ");
      state.selectedDay = +dateArr[0];
      state.selectedMonth = +dateArr[1];
      state.selectedYear = +dateArr[2];
    },
    dayDecrement(state) {
      const newSelectedDate = new Date(state.selectedYear, state.selectedMonth, state.selectedDay - 1);
      state.selectedDay = newSelectedDate.getDate();
      state.selectedMonth = newSelectedDate.getMonth();
      state.selectedYear = newSelectedDate.getFullYear();
    },
    dayIncrement(state) {
      const newSelectedDate = new Date(state.selectedYear, state.selectedMonth, state.selectedDay + 1);
      state.selectedDay = newSelectedDate.getDate();
      state.selectedMonth = newSelectedDate.getMonth();
      state.selectedYear = newSelectedDate.getFullYear();
    },
  },
});

export default dateSlice.reducer;

export const { monthDecrement, monthIncrement, selectDate, dayDecrement, dayIncrement } =
  dateSlice.actions;

export const selectDay = ({ date }) => date.selectedDay;
export const selectMonth = ({ date }) => date.selectedMonth;
export const selectYear = ({ date }) => date.selectedYear;
export const selectedDate = ({ date }) =>
  `${date.selectedDay} ${monthArr[date.selectedMonth]} ${date.selectedYear}`;
export const selectDaysArr = createSelector(
  [selectMonth, selectYear, (state, today) => today],
  (month, year, today) => getDaysToRender(month, year, today)
);
