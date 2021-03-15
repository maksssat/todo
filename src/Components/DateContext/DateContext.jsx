import React, { useContext, useReducer } from "react";
import { reducer, initialState } from "./DateReducer";
import { getDaysToRender } from "./getDaysToRender";

const DateContext = React.createContext();

export function useDate() {
  return useContext(DateContext);
}

export function DateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const daysToRender = getDaysToRender(state.month, state.year);

  console.log("DateContext render");

  return (
    <DateContext.Provider
      value={{
        state,
        dispatch,
        daysToRender,
      }}
    >
      {children}
    </DateContext.Provider>
  );
}
