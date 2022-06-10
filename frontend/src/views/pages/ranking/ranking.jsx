import React from "react";
import SubpageHead from "../../components/SubpageHead";
import RankingList from "./rankingList";
import TagList from "./tagList";
import "./ranking.scss";
import axios from "axios";

class ranking extends React.Component {
  constructor(props) {
    super();
    this.state = { root_id: props.match.params.id };
    this.getJson();
  }

  getJson = async () => {
    try {
      const url =
        "https://rattaco-backend.herokuapp.com/tasks/ranking/" +
        this.state.root_id;
      await axios.get(url).then((res) => {
        this.setState(res.data);
      });
      console.log(this.state);
    } catch (error) {
      console.log("error!!");
    }
  };

  render() {
    return (
      <div>
        <SubpageHead
          title={this.state.taskName}
          name={"taskID_" + this.state.root_id}
          categoryTag="cooking"
        />
        <TagList tags={this.state.tags} />
        <RankingList records={this.state.records} />
      </div>
    );
  }
}

export default ranking;
