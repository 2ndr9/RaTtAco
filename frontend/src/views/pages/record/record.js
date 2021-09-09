import React from "react";
import StopWatch from "../../components/StopWatch";
import SubpageHead from "../../components/SubpageHead";
import Select from "react-select";
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
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.gettime = this.gettime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTasks = this.getTasks.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSelectChange(event) {
    this.setState({
      task: event.value,
    });
    console.log("changed");
    console.log(this.state.task);
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

  handleSubmit() {
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

  getTasks(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    axios
      .get("http://20.63.164.137:3000/tasks/" + value)
      .then((res) => {
        console.log("hoge");
        console.log(res.data);
        this.setState(res.data);
        this.ChangeRegulations();
        console.log(this.state);
      })
      .catch((error) => {
        console.log("namu");
        this.setState({
          options: [],
        });
        console.log(error);
      });
  }

  ChangeRegulations() {
    const RegulationTags = [];
    const tasks = this.state.tasks;
    for (const i in tasks) {
      RegulationTags.push({ value: tasks[i].id, label: tasks[i].name });
    }
    this.setState({
      options: RegulationTags,
    });
    console.log(this.state.options);
  }

  render() {
    const customStyles = {
      container: (provided) => ({
        ...provided,
        backgroundColor: "yellow",
        margin: "1rem 0",
      }),
      menu: () => ({}),
      menuList: (provided) => ({
        ...provided,
        backgroundColor: "#fff",
        border: "1px solid hsl(0, 0%, 80%)",
        borderRadius: "5px 5px 0 0",
        maxHeight: "10rem",
        bottom: "52px",
        position: "absolute",
        width: "100%",
      }),
      option: (provided) => ({
        ...provided,
        backgroundColor: "#fff",
      }),
    };
    const radio_list = [];
    for (const i in categoryTags) {
      // console.log(categoryTags[i].label);
      radio_list.push(
        <div className="radio_component">
          <input
            type="radio"
            id={categoryTags[i].value}
            name="categoryTag"
            value={categoryTags[i].label}
            onChange={this.getTasks}
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
            <Select
              options={this.state.options}
              styles={customStyles}
              onChange={this.handleSelectChange}
            />
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
