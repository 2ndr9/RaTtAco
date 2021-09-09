import React from "react";
import TaskCard from "./TaskCard";

class TaskList extends React.Component {
  render() {
    const taskList = this.props.tasks;
    // console.log(taskList);
    const taskCardWrapper = [];
    for (const i in taskList) {
      taskCardWrapper.push(
        <TaskCard
          taskTitle={taskList[i].name}
          taskName={taskList[i].id}
          taskInfo={taskList[i].description}
        />
      );
    }
    // console.log(taskCardWrapper);
    return (
      <section id="taskList">
        {taskCardWrapper}
        {/* <TaskCard
          taskTitle="掃除"
          taskName="cleaning"
          taskInfo="掃除の説明が入ります。掃除の説明が入ります。掃除の説明が入ります。掃除の説明が入ります。"
        />
        <TaskCard
          taskTitle="料理"
          taskName="cooking"
          taskInfo="料理の説明が入ります。"
        />
        <TaskCard
          taskTitle="洗濯"
          taskName="washing"
          taskInfo="洗濯の説明が入ります。"
        /> */}
      </section>
    );
  }
}

export default TaskList;
