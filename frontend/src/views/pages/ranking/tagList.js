import React from "react";
import Tag from "./tag";

class TagList extends React.Component {
  render() {
    const tags = this.props.tags;
    const list = [];
    for (const i in tags) {
      list.push(<Tag name={tags[i].name} key={tags[i].id} />);
    }

    return <div className="tagWrapper">{list}</div>;
  }
}

export default TagList;
