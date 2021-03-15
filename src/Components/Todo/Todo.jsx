import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Todo() {
  const [state, setState] = useState(true);

  console.log("Todo rendered");

  // return <section className="todo"></section>;

  return (
    <>
      <Child1 />
      <Child2 />
      <button onClick={() => setState((prev) => !prev)}>Click</button>
    </>
  );
}
