import React, { useContext, useReducer, useEffect} from "react";
import { reducer, initialState } from "./DateReducer";
import { getDaysToRender } from "./getDaysToRender";

const DateContext = React.createContext();

export function useDate() {
  return useContext(DateContext);
}

export function DateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const daysToRender = getDaysToRender(state.month, state.year);

  // console.log("DateContext render", stateTest);

  // useEffect(() => {
  //   console.log("DateContext rendered", stateTest);
  // });

  return (
    <>
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
