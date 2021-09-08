import React from "react";
import { Link } from "react-router-dom";

class Tag extends React.Component {
  render() {
    return (
      <Link to={"/tag/" + this.props.name} className="tag">
        {this.props.name}
      </Link>
    );
  }
}

export default Tag;
