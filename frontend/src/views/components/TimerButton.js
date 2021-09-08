import React from "react";
  
export default function ControlButtons(props) {
  const StartButton = (
    <span>
        <button name="start" onClick={(e)=>{props.handlePauseResume(e)}}>
            Start
        </button>
    </span>
  );

  const StopButton = (
    <span>
        <button name="end" onClick={(e)=>{props.handlePauseResume(e)}}>
            Stop
        </button>
    </span>
  );

  const ResetButton = (
      <button onClick={props.handleReset}>
        Reset
      </button>
  );
  
  
  return (
    <div className="Control-Buttons">
      <div>{props.isPaused ? StartButton : StopButton}{ResetButton}</div>
    </div>
  );
}