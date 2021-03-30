import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {},
  reducers: {
    add: {
      reducer(state, action) {
        const date = action.payload.date;
        if (state[date] !== undefined) state[date].push(action.payload);
        else state[date] = [action.payload];
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
      const date = action.payload.date;
      const id = action.payload.id;
      const index = state[date].findIndex((item) => item.id === id);
      state[date].splice(index, 1);
    },

    complete(state, action) {
      const date = action.payload.date;
      const id = action.payload.id;
      const index = state[date].findIndex((item) => item.id === id);
      state[date][index].completed = !state[date][index].completed;
    },
    edit(state, action) {},
  },
});

export default todoSlice.reducer;

export const { add, remove, complete, edit } = todoSlice.actions;

export const selectTodo = (state) => state.todo;
