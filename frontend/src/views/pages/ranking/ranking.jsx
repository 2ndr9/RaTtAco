import React from "react";
import { RankingHead } from "./rankingHead";
import { RankingList } from "./rankingList";
import "./ranking.css"

class ranking extends React.Component {
  render() {
  return (
    <div>
      <RankingHead />
      <RankingList />
    </div>
  );
};
}

export default ranking;
