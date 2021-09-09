import React from "react";
import { Link } from "react-router-dom";

class CategoriesCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className={this.props.taskName + " taskCard"}>
        <div>
          <h2>{this.props.taskTitle}</h2>
          <p>{this.props.taskInfo}</p>
          <Link
            to={"/tag/" + this.props.taskName}
            class="button-wide-blue icon-run"
          >
            種目一覧
          </Link>
        </div>
      </section>
    );
  }
}

export default CategoriesCard;
