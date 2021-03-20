import React, { useContext, useReducer, useEffect, useState } from "react";
import { reducer, initialState } from "./DateReducer";
import { getDaysToRender } from "./getDaysToRender";

const DateContext = React.createContext();

export function useDate() {
  return useContext(DateContext);
}

export function DateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateTest, setStateTest] = useState(true);

  const daysToRender = getDaysToRender(state.month, state.year);

  console.log("DateContext render", stateTest);

  useEffect(() => {
    console.log("DateContext rendered", stateTest);
  });

  return (
    <>
      {/* <button onClick={() => setStateTest((prev) => !prev)}>OK</button> */}
      <DateContext.Provider
        value={{
          state,
          dispatch,
          daysToRender,
        }}
      >
        {children}
      </DateContext.Provider>
    </>
  );
}
