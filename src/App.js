import PlaceTextAtCenter from "./PlaceTextAtCenter";
// import Button from "./Button";
// import CountButtonClicks from "./CountButtonClicks";
import ControlledAndUncotrolledCompo from "./ControlledAndUncotrolledComp";
import HackerRank from "./HackerRank";
import APIWork from "./APIWork";
import HackerRankCSS from "./HackerRankCSS";

function App() {
  //Enable this function when enabling <Button Component
  // const handleClick = (name) => {
  //   alert(`you clicked ${name}`);
  // };
  return (
    <>
      {/* /Total 3 ways - Using Position & Display & Margin place text at center */}
      {/* <PlaceTextAtCenter /> */}

      {/* //Custom Button Component and capture click using props */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Button name="Button 1" handleClick={handleClick} />
        <Button name="Button 2" handleClick={handleClick} />
        <Button name="Button 3" handleClick={handleClick} />
      </div> */}

      {/*Count Button Clicks using State
      Show array data using map
      Show array of objects data using map*/}
      {/* <CountButtonClicks /> */}

      {/* Pass Data to Child and 
      show filtered data in child compo 
      on click of Parent Comp Button clicks */}
      {/* <HackerRank /> */}

      {/* Display Controlled & Uncontrolled Comps in React */}
      {/* <ControlledAndUncotrolledCompo /> */}

      {/* How API's work both fetch and AXIOS*/}
      {/* How to do a Flip Card */}
      {/* <APIWork /> */}

      {/* create an animation that doubles it's size on hover and
       the animation should happen for 500ms */}
      <HackerRankCSS />
    </>
  );
}

export default App;
