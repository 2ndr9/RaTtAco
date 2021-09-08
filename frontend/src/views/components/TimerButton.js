import React from "react";

export default function ControlButtons(props) {
  const StartButton = (
    <button
      name="start"
      onClick={(e) => {
        props.handlePauseResume(e);
      }}
    >
      Start
    </button>
  );

  const StopButton = (
    <button
      name="end"
      onClick={(e) => {
        props.handlePauseResume(e);
      }}
    >
      Stop
    </button>
  );

  const ResetButton = (
    <button onClick={props.handleReset} className="reset">
      Reset
    </button>
  );

  return (
    <div className="Control-Buttons">
      {props.isPaused ? StartButton : StopButton}
      {ResetButton}
    </div>
  );
}
