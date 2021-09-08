import React from "react";
import { Link } from "react-router-dom";
import SubpageHead from "../../components/SubpageHead";

class result extends React.Component {
  render() {
    return (
      <div>
        <SubpageHead title={this.props.word} name="record" />
          <Link to={"/tag/" + this.props.name} className="tag">
            {this.props.name}
        </Link>
      </div>
    );
  }
}

export default result;
