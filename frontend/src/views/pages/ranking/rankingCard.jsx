import React from "react";

export const RankingCard = (props) => {
  return (
    <div className="CardContainer">
        <div className="username">{props.name}</div>
        <div className="date">{props.date}</div>
        <div className="time">{props.time}</div>
    </div>
  );
};
