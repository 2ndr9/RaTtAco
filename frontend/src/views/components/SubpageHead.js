import React from "react";
import "./SubpageHead.scss";

class SubpageHead extends React.Component {
  render() {
    return (
      <div className={"full-width header_subpage " + this.props.name}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default SubpageHead;
