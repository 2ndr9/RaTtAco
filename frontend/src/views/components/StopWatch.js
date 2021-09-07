import React, { useState }  from 'react';
import Timer from "./Timer";
import TimerButtons from "./TimerButton";

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    
    React.useEffect(() => {
      let interval = null;
    
      if (isActive && isPaused === false) {
        interval = setInterval(() => {
          setTime((time) => time + 10);
        }, 10);
      } else {
        clearInterval(interval);
      }
      return () => {
        clearInterval(interval);
      };
    }, [isActive, isPaused]);
    
    
    const handlePauseResume = () => {
      setIsActive(true);
      setIsPaused(!isPaused);
    };
    
    const handleReset = () => {
      setIsActive(false);
      setIsPaused(true);
      setTime(0);
    };
    
    return (
      <div className="stop-watch">
        <Timer time={time} />
        <TimerButtons
          active={isActive}
          isPaused={isPaused}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
      />
    </div>
  );
}
  
export default StopWatch;