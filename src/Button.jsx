import React from "react";

const Button = (props) => {
  return (
    <div>
      <div
        style={{
          width: "100px",
          heigth: "100px",
          border: "1px solid grey",
          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => props.handleClick(props.name)}
      >
        {props.name}
      </div>
    </div>
  );
};

export default Button;
