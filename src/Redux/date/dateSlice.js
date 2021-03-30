import { createSlice } from "@reduxjs/toolkit";
import { getDaysToRender } from "./getDaysToRender";

export const today = new Date();

const month = [
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
    today: today.toLocaleDateString(),
    month: today.getMonth(),
    year: today.getFullYear(),
    selectedDate: `${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`,
  },
  reducers: {
    monthDecrement(state) {
      if (state.month === 0) {
        state.month = 11;
        state.year = state.year - 1;
      } else state.month = state.month - 1;
    },
    monthIncrement(state) {
      if (state.month === 11) {
        state.month = 0;
        state.year = state.year + 1;
      } else {
        state.month = state.month + 1;
      }
    },
    selectDate(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export default dateSlice.reducer;

export const { monthDecrement, monthIncrement, selectDate } = dateSlice.actions;

export const selectMonth = (state) => state.date.month;
export const selectYear = (state) => state.date.year;
export const selectedDate = (state) => state.date.selectedDate;
export const selectDaysArr = ({ date }) => getDaysToRender(date.month, date.year, today);
