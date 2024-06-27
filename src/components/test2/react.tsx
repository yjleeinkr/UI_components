import { useState } from "react";

const Test2_React = () => {
  const [show, toggle] = useState(false);
  return (
    <div>
      Test2 - React
      <button onClick={() => toggle((v) => !v)}>toggle</button>
      <p>{show ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Test2_React;
