import React, { useContext, useReducer } from "react";
import { reducer, initialState } from "./DateReducer";

const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export function DateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("TodoContext render");

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
