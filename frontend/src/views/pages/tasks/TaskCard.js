import React from "react";
import { Link } from "react-router-dom";

import "./tasks.scss";

class TaskCard extends React.Component {
  render() {
    return (
      <section className={this.props.taskName + " taskCard"}>
        <div>
          <h2>{this.props.taskTitle}</h2>
          <p>{this.props.taskInfo}</p>
          <Link to="/ranking/1" class="button-wide-red icon-crown">
            ランキング
          </Link>
        </div>
      </section>
    );
  }
}

export default TaskCard;
