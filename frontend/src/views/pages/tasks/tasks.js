import React from "react";
import SubpageHead from "../../components/SubpageHead";
import TaskList from "./TaskList";

import "./tasks.scss";

class tasks extends React.Component {
  render() {
    return (
      <div>
        <SubpageHead title="種目一覧" name="tasks" />
        <TaskList />
      </div>
    );
  }
}

export default tasks;
