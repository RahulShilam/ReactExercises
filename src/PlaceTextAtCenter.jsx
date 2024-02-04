import React from "react";

const PlaceTextAtCenter = () => {
  return (
    //First Way
    // <div
    //   style={{
    //     //using flex
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     background: "yellow",
    //     height: "100vh",
    //     width: "100%",
    //   }}
    // >
    //   <div
    //   //using position
    //   //   style={{ position: "absolute", top: "50%", left: "50%" }}
    //   >
    //     Hello World
    //   </div>
    // </div>

    //second way
    // <div
    //   style={{
    //     background: "yellow",
    //     height: "100vh",
    //     width: "100%",
    //   }}
    // >
    //   <div
    //     //using position
    //     style={{ position: "absolute", top: "50%", left: "50%" }}
    //   >
    //     Hello World
    //   </div>
    // </div>

    //third way
    <div
      style={{
        background: "yellow",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        //using position
        style={{ height: "100px", width: "100px", margin: "auto" }}
      >
        Hello World
      </div>
    </div>
  );
};
export default PlaceTextAtCenter;
