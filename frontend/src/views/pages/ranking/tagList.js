import React from "react";
import Tag from "./tag";

class TagList extends React.Component {
  render() {
    return (
      <div className="tagWrapper">
        <Tag name="cooking" />
        <Tag name="やきそば" />
        <Tag name="麺類" />
        <Tag name="主食" />
      </div>
    );
  }
}

export default TagList;
