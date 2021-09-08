import React from "react";
import SubpageHead from "../../components/SubpageHead";
import { RankingList } from "./rankingList";
import TagList from "./tagList";
import "./ranking.scss"
import axios from "axios";
class ranking extends React.Component {
  constructor() {
    super();
    this.state = {  };
    this.getJson();
  }

  getJson = async () => {
    try {    
      const url = 'http://20.63.164.137:3000/tasks/ranking/1';
      await axios.get(url).then(res => {
        this.setState(res.data);
      });
      console.log(this.state)
    } catch (error) {    
      console.log("error!!");
    }
  };
  

  render() {
  return (
    <div>
      <SubpageHead title={this.state.taskName} name="tasks" categoryTag="cooking" />
      <TagList />
      <RankingList />
    </div>
  );
};
}

export default ranking;
