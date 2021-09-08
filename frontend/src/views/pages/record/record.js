import React from "react";
import StopWatch from "../../components/StopWatch";
import SubpageHead from "../../components/SubpageHead";
import { Link } from "react-router-dom";

import "../../components/general.scss";
import "./record.scss";

class record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "1",
      start: "--/--/--/ --:--:--.--",
      end: "--/--/--/ --:--:--.--",
      startback: null,
      endback: null,
    };
    this.timerEvent = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getTime = this.getTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  getTime(event) {
    const now = new Date();
    const nameBack = event.target.name + "back";
    this.setState({
      [nameBack]: now,
    });
    const Year = now.getFullYear();
    const Month = now.getMonth() + 1;
    const daTe = now.getDate();
    const Hour = ("0" + now.getHours()).slice(-2);
    const Min = ("0" + now.getMinutes()).slice(-2);
    const Sec = ("0" + now.getSeconds()).slice(-2);
    const MiliSec = Math.round(now.getMilliseconds() / 10);
    const Now =
      Year +
      "/" +
      Month +
      "/" +
      daTe +
      " " +
      Hour +
      ":" +
      Min +
      ":" +
      Sec +
      "." +
      MiliSec;
    const name = event.target.name;
    this.setState({
      [name]: Now,
    });
  }

  resetTime() {
    this.setState({
      start: "--/--/--/ --:--:--.--",
      end: "--/--/--/ --:--:--.--",
      startback: null,
      endback: null,
    });
  }

  endPass() {}

  render() {
    return (
      <div>
        <SubpageHead title="Let's RTA!" name="record" />

        <form onSubmit={this.handleSubmit}>
          <div className="one-to-one_form">
            <label for="task">種目</label>
            <select
              name="task"
              value={this.state.task}
              onChange={this.handleInputChange}
            >
              <option value="1">掃除</option>
              <option value="2">料理</option>
              <option value="3">洗濯</option>
            </select>
          </div>
        </form>
        <StopWatch getTime={this.getTime} resetTime={this.resetTime} />
        <form onSubmit={this.handleSubmit}>
          <div className="one-to-one_form">
            <label for="start_time">タイマースタート</label>
            <input
              type="text"
              value={this.state.start}
              name="start_time"
              className="input_timer"
              disabled
            />
            <label for="end_time">タイマーストップ</label>
            <input
              type="text"
              value={this.state.end}
              name="end_time"
              className="input_timer"
              disabled
            />
          </div>
        </form>

        {!this.state.endback || this.state.startback > this.state.endback ? (
          <Link
            to={"/ranking/" + this.state.task}
            onClick={(event) => event.preventDefault()}
            className="button-wide-grey mt2"
          >
            登録
          </Link>
        ) : (
          <Link
            to={"/ranking/" + this.state.task}
            onClick={this.endPass}
            className="button-wide-blue mt2"
          >
            登録
          </Link>
        )}
      </div>
    );
  }
}

export default record;
