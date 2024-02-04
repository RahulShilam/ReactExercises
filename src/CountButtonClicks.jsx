import React, { useState } from "react";

const CountButtonClicks = () => {
  const [count, setCount] = useState(0);
  const [arrayMap, setArrapMap] = useState([
    "dog",
    "cat",
    "chicken",
    "cow",
    "sheep",
    "horse",
  ]);
  const [arrayOfObj, setArrayOfObj] = useState([
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ]);
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "20%",
        textAlign: "center",
      }}
    >
      <div>
        <div>Button has been clicked {count} times</div>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Click Me
        </button>
      </div>
      {/* arrao of object */}
      <div
        style={{
          border: "1px solid grey",
          background: "lightblue",
        }}
      >
        {arrayOfObj.map((item) => (
          <div>
            <h1>{item.setup}</h1>
            <p>{item.punchline}</p>
          </div>
        ))}
      </div>

      <div>
        {arrayMap.map((item) => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default CountButtonClicks;
