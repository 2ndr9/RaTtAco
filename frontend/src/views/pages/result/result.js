import React from "react";
// import { Link } from "react-router-dom";
import SubpageHead from "../../components/SubpageHead";
import TaskList from "../../components/tasks/TaskList";

class result extends React.Component {
  render() {
    const dummy = "料理";
    return (
      <div>
        {/* <SubpageHead title={this.props.word} name="record" /> */}
        <SubpageHead title={"「" + dummy + "」の検索結果"} name="record" />
        {/* dummmy */}
        {/* <Link to={"/tag/" + this.props.name} className="tag">
          {this.props.name}
        </Link> */}
        <TaskList />
      </div>
    );
  }
}

export default result;
