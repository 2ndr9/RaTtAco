import React from "react";
  
export default function ControlButtons(props) {
  const Buttons = (
    <span>
        <button onClick={props.handlePauseResume}>
            {props.isPaused ? "Start" : "Stop"}
        </button>
        <button onClick={props.handleReset}>
            Reset
        </button>
    </span>
  );

  
  
  return (
    <div className="Control-Buttons">
      <div>{Buttons}</div>
    </div>
  );
}