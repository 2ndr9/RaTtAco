import React from "react";
import SubpageHead from "../../components/SubpageHead";
import TaskList from "../../components/tasks/TaskList";

import "../../components/tasks/tasks.scss";

class tasks extends React.Component {
  render() {
    return (
      <div>
        <SubpageHead title="カテゴリ一覧" name="categories" />
        <TaskList />
      </div>
    );
  }
}

export default tasks;
