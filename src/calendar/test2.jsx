import React from "react";
import { useTodo } from "../TodoContext";

export default function Test1() {
  const { state } = useTodo();

  console.log("Test2 render");

  return <section>{state.test2}</section>;
}
