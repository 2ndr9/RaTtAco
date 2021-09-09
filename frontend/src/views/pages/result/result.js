import React from "react";
import axios from "axios";

import SubpageHead from "../../components/SubpageHead";
import TaskList from "../../components/tasks/TaskList";

class result extends React.Component {
  constructor(props) {
    super();
    this.state = { root_id: props.match.params.id, tagID: "" };
    this.getJson();
  }

  getJson = async () => {
    try {
      const url = "http://20.63.164.137:3000/tasks/" + this.state.root_id;
      const encoded = encodeURI(url);
      await axios.get(encoded).then((res) => {
        this.setState(res.data);
      });
    } catch (error) {
      console.log("error!!");
    }
  };

  render() {
    console.log(this.state);
    const resultList = this.state.tasks;
    const tagID = this.state.tagID;
    // console.log(resultList);
    return (
      <div>
        <SubpageHead
          title={"「" + this.state.root_id + "」の検索結果"}
          name={"tagID_" + tagID}
        />
        <TaskList tasks={resultList} />
      </div>
    );
  }
}

export default result;
