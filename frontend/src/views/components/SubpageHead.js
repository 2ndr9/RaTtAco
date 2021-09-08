import React from "react";
// import { Link } from "react-router-dom";
import "./SubpageHead.scss";

class SubpageHead extends React.Component {
  render() {
    return (
      <div className={"full-width header_subpage " + this.props.name}>
        <h1>{this.props.title}</h1>
        {/* {this.props.categoryTag && (
          <Link to={"/tag/" + this.props.categoryTag} className="tag category">
            {this.props.categoryTag}
          </Link>
        )} */}
      </div>
    );
  }
}

export default SubpageHead;
