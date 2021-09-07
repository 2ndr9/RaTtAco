import React from "react";

export const RankingCard = (props) => {
  return (
    <div className="CardContainer">
      <div>
        <div className="rank"></div>
        <div className="time">
          {
            props.time
          }
        </div>
      </div>
      <div className="username">{props.name}</div>
    </div>
  );
};
