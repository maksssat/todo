import React from "react";
import { useTodo } from "../TodoContext";

export default function Test1() {
  const {
    state: { test1 },
  } = useTodo();

  console.log("Test1 render");

  return <section>{test1}</section>;
}
