import React from "react";
import StopWatch from "../../components/StopWatch";
import SubpageHead from "../../components/SubpageHead";
import { Link } from "react-router-dom";
import axios from "axios";
import categoryTags from "../../components/categoryTags";

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
    this.gettime = this.gettime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  gettime(event) {
    const now = new Date();
    const nameBack = event.target.name + "back";
    this.setState({
      [nameBack]: now.getTime(),
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
    console.log(this.state);
  }

  resetTime() {
    this.setState({
      start: "--/--/--/ --:--:--.--",
      end: "--/--/--/ --:--:--.--",
      startback: null,
      endback: null,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      taskID: this.state.task,
      startTime: this.state.startback,
      endTime: this.state.endback,
    };

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("http://20.63.164.137:3000/record", user, {
        headers: headers,
      })
      .then((res) => {
        console.log("record submit");
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  endPass() {}

  render() {
    const radio_list = [];
    for (const i in categoryTags) {
      // console.log(categoryTags[i].label);
      radio_list.push(
        <div className="radio_component">
          <input
            type="radio"
            id={categoryTags[i].value}
            name="categoryTag"
            value={categoryTags[i].value}
          />
          <label for={categoryTags[i].value}>{categoryTags[i].label}</label>
        </div>
      );
    }
    return (
      <div>
        <SubpageHead title="Let's RTA!" name="record" />

        <form onSubmit={this.handleSubmit}>
          <div className="one-to-one_form">
            <label for="task">種目</label>
            <div class="radio_wrapper">{radio_list}</div>
          </div>
          <div className="one-to-one_form">
            <label for="regulation">レギュレーション</label>
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
        <StopWatch gettime={this.gettime} resetTime={this.resetTime} />
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
            onClick={this.handleSubmit}
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
