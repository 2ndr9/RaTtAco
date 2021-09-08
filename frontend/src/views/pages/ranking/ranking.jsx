import React from "react";
import SubpageHead from "../../components/SubpageHead";
import { RankingList } from "./rankingList";
import TagList from "./tagList";
import "./ranking.scss"

class ranking extends React.Component {
  constructor() {
    super();
    this.state = {
      regulationName: "",
      tags: [],
      records: []
    };
  }

  render() {
  return (
    <div>
      <SubpageHead title={this.state.regulationName} name="tasks" categoryTag="cooking" />
      <TagList />
      <RankingList />
    </div>
  );
};
}

export default ranking;
