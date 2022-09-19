import React from "react";

const Scroller = () => {
  return (
    <a
      id="scroll-top"
      className="scroll-top"
      href="#top"
      title="Top"
      role="button"
    >
      {" "}
      <i className="p-icon-arrow-up" />
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
        <circle
          id="progress-indicator"
          fill="transparent"
          stroke="#000000"
          strokeMiterlimit={10}
          cx={35}
          cy={35}
          r={34}
          style={{ strokeDasharray: "108.881, 400" }}
        />
      </svg>
    </a>
  );
};

export default Scroller;
