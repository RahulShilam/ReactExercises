import React, { useRef } from "react";

const ControlledAndUncotrolledCompo = () => {
  const fileInput = useRef(); //used to access DOM nodes for uncontrolled comps
  let options = ["apple", "banana", "lemon"];
  return (
    <div
      style={{
        position: "absolute",
        left: "40%",
        top: "20%",
        textAlign: "center",
      }}
    >
      <div
        style={{
          border: "1px solid grey",
          padding: "5%",
        }}
      >
        <h3
          style={{
            textDecorationLine: "underline",
          }}
        >
          Controlled Comps
        </h3>
        <div style={{ fontSize: "small" }}>
          All controlled comps accept a value attribute that is used to change
          it's programatically
        </div>
        <form style={{ padding: "5px", background: "lightgrey" }}>
          <input
            type="text"
            name="name"
            placeholder="input type 'text'"
            value={""}
          ></input>
          <input type="button" name="Click" value={"input type 'button'"} />
          <div>
            <input type="checkbox" />
            <label>beside me, it's input type 'checkbox'</label>
          </div>
          <div>
            <input type="radio" />
            <label>beside me, it's input type 'radio'</label>
          </div>
          <textarea placeholder="textarea component" value={""}></textarea>
          <div>
            <select
            //   default={"Select One"}
            //   placeholder="Select an item"
            >
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
              <option value="option4">Option4</option>
            </select>
            <label>Beside me, it's select component</label>
          </div>

          <div>
            <select multiple={true} value={["B", "C"]}>
              <option value="option1">A</option>
              <option value="option2">B</option>
              <option value="option3">C</option>
              <option value="option4">D</option>
            </select>
            <label>
              Beside me, it's select component with multiple attribute
            </label>
          </div>
          <div>
            <input type="submit" value="input type Submit" />
          </div>
        </form>

        <h3
          style={{
            textDecorationLine: "underline",
          }}
        >
          Uncontrolled Comps
        </h3>
        <div style={{ fontSize: "small" }}>
          Uncontrolled comps value is read only
        </div>
        <form style={{ padding: "5px", background: "lightgrey" }}>
          <input type="file" />
        </form>
      </div>
    </div>
  );
};
export default ControlledAndUncotrolledCompo;
