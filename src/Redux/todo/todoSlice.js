import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { monthArr, today } from "../../Redux/date/dateSlice";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    [`${today.getDate()} ${monthArr[today.getMonth()]} ${today.getFullYear()}`]: {
      "MYDRBqZCJL7yg1i4FPo-2": {
        id: "MYDRBqZCJL7yg1i4FPo-2",
        completed: false,
        date: "17 июня 2022",
        text: "Купить молоко",
      },
      "9k8e49l7_xh_it1rBLooj": {
        id: "9k8e49l7_xh_it1rBLooj",
        completed: false,
        date: "17 июня 2022",
        text: "Помыть машину",
      },
      DGPpwRaV_Ebk4kS_BelXF: {
        id: "DGPpwRaV_Ebk4kS_BelXF",
        completed: true,
        date: "17 июня 2022",
        text: "Изучить API Redux",
      },
      "7cUOax4vpw9QH77VFDYDO": {
        id: "7cUOax4vpw9QH77VFDYDO",
        completed: true,
        date: "17 июня 2022",
        text: "Изучить API React Hooks",
      },
      MIMUFMCT1bnATOCiZhDi3: {
        id: "MIMUFMCT1bnATOCiZhDi3",
        completed: true,
        date: "17 июня 2022",
        text: "Изучить API React Router",
      },
    },
  },
  reducers: {
    add: {
      reducer(state, action) {
        const payload = action.payload;
        const date = payload.date;
        const id = payload.id;
        if (state[date] === undefined) {
          state[date] = {};
          state[date][id] = payload;
        } else state[date][id] = payload;
      },

      prepare(date, text) {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            date,
            text,
          },
        };
      },
    },

    remove(state, action) {
      const payload = action.payload;
      const date = payload.date;
      const id = payload.id;
      delete state[date][id];
    },

    complete(state, action) {
      const payload = action.payload;
      const date = payload.date;
      const id = payload.id;
      state[date][id].completed = !state[date][id].completed;
    },

    edit(state, action) {
      const payload = action.payload;
      const date = payload.date;
      const id = payload.id;
      state[date][id] = payload;
    },
  },
});

export default todoSlice.reducer;

export const { add, remove, complete, edit } = todoSlice.actions;

export const selectTodos = (state) => state.todo;
export const selectTodoById = (state, date, id) => state.todo[date][id];
