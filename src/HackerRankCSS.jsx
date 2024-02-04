import React from "react";
import "./HackerRankCSS.scss";

// Read CSS
const HackerRankCSS = () => {
  return (
    <div className="hacker-rank-css">
      {/* // create an aniimation that doubles
        // it's size on hover and the animation should happen for 500ms
        //on mouse over div should double it's size and an animation should happen over 500ms */}
      {/*<div className="greyBall"></div>

    //   CSS Ellipsis(...)
       <div>
        <div className="truncate-ellipsis">
          This is a long sentence that will be truncated with an ellipsis if it
          exceeds the allocated width.
        </div>

        //CSS Text coloring for id, class and important
        <div>
          <p id="tagid"> how to color this line red</p>
        </div>

        //prevent user from selecting text
        <div>
          <p class="prevent-selection">I should not be selectable</p>
        </div>

        //hide placeholder of input
        <div>
          <input type="text" placeholder="type here"></input>
        </div> */}

      {/* //align items at center */}
      {/* <div className="parent"><div className="child">keep me at the center</div></div> */}
      {/* </div> */}
      <div>
        {/* CSS Vertical Align */}
        <p>
          Let's<span className="heroWorld">Hack</span>
          <img src="/" />
        </p>
      </div>
    </div>
  );
};

export default HackerRankCSS;
