export const today = new Date();

// initial state
export const initialState = {
  month: today.getMonth(),
  year: today.getFullYear(),
};

// action types
export const MONTH_DECREMENT = "monthDecrement";
export const MONTH_INCREMENT = "monthIncrement";

// reducer
export function reducer(state, action) {
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
