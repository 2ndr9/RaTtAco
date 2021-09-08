import React from "react";
import SubpageHead from "../../components/SubpageHead";
import { RankingList } from "./rankingList";
import TagList from "./tagList";
import "./ranking.scss"

class ranking extends React.Component {
  render() {
  return (
    <div>
      <SubpageHead title="Make Yakisoba" name="tasks" categoryTag="cooking" />
      <TagList />
      <RankingList />
    </div>
  );
};
}

export default ranking;
