// initial state
export const initialState = {};

// action types
const ADD_TODO = "addTodo";
const COMPLETE_TODO = "completeTodo";
const REMOVE_TODO = "deleteTodo";

// actions
export const add = (date, id, text) => ({ type: ADD_TODO, text, date, id });
export const complete = (date, id) => ({ type: COMPLETE_TODO, id, date });
export const remove = (date, id) => ({ type: REMOVE_TODO, id, date });

// reducer
export function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        [action.date]:
          [action.date] in state
            ? (state[action.date] = [
                ...state[action.date],
                {
                  text: action.text,
                  completed: false,
                  id: action.id,
                },
              ])
            : (state[action.date] = [
                { text: action.text, completed: false, id: action.id },
              ]),
      };

    case COMPLETE_TODO:
      return {
        ...state,
        [action.date]: state[action.date].map((item) => {
          if (item.id === action.id)
            return { ...item, completed: !item.completed };
          return { ...item };
        }),
      };

    case REMOVE_TODO:
      return {
        ...state,
        [action.date]: state[action.date].filter((item) => {
          return !(item.id === action.id);
        }),
      };

    default:
      return state;
  }
}
