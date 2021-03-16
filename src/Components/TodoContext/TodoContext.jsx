import React, { useContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./TodoReducer";

const TodoContext = React.createContext();

export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("TodoContext render");

  useEffect(() => {
    console.log("TodoContext rendered");
  });

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
