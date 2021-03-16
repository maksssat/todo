import React, { useContext, useState, useEffect } from "react";
import { today } from "../DateContext/DateReducer";

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

const SelectedDateContext = React.createContext();

export function useSelectedDate() {
  return useContext(SelectedDateContext);
}

export function SelectedDateProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(() => {
    return `${today.getDate()} ${
      month[today.getMonth()]
    } ${today.getFullYear()}`;
  });

  console.log("SelectedDateContext render");

  useEffect(() => {
    console.log("SelectedDateContext rendered");
  });

  return (
    <SelectedDateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </SelectedDateContext.Provider>
  );
}
