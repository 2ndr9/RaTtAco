import React from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import swim_rattaco from "../../../img/icon/icon.svg";
import axios from "axios";
import { withRouter } from "react-router";
import "./top.scss";

let tasks = [];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return tasks.filter((task) => regex.test(task.name) || regex.test(task.yomi));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

const renderInputComponent = (inputProps) => (
  <div>
    <input id="task-name-suggestion" className="form-control" {...inputProps} />
  </div>
);

const token = localStorage.getItem("token");
const baseurl = "http://20.63.164.137:3000/";
const authAxios = axios.create({
  baseURL: baseurl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

class top extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
    };
    this.getMe();
    this.getJson();
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event, { newValue, method }) => {
    this.setState({ value: newValue });
    // setSearchURL(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: getSuggestions(value) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  getJson = async () => {
    try {
      const url = "http://20.63.164.137:3000/tags/";
      const encoded = encodeURI(url);
      await axios.get(encoded).then((res) => {
        tasks = res.data;
      });
    } catch (error) {
      console.log("error!!");
    }
  };

  getMe = async () => {
    try {
      await authAxios.get("/users/me").then((res) => {
        this.setState(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleToSearchResult = () => {
    this.props.history.push("/tag/" + this.state.value);
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "例: 料理、洗濯、etc...",
      value,
      onChange: this.onChange,
      className: "form-control form-control-lg",
    };

    return (
      <div id="top">
        <section id="eyecatch" className="full-width">
          <p>
            生活のアクセルを踏み込む、
            <br />
            日常生活RTA(リアル･タイム･アタック)アプリ
          </p>
        </section>
        <section>
          <p>
            料理、掃除、洗濯、運動......
            <br />
            現代人は毎日大量のタスクに追われる生活を
            <br className="pc-none" />
            送っています。
          </p>
          <p>
            少しでも早く、誰よりも早く、
            <br className="pc-none" />
            このタスクを終わらせたい！
            <br />
            そんなときには<strong>RaTtAco</strong>(ラタッコ)。
          </p>
          <p>
            ゲームのRTA(リアル・タイム・アタック)から
            <br className="pc-none" />
            着想を得たサービスが、あなたの
            <br className="pc-none" />
            生活のアクセルを踏み込みます。
          </p>

          <div className="wrapper_swim_rattaco">
            <img src={swim_rattaco} alt="icon" className="swim_rattaco" />
          </div>

          <Link
            to="/categories"
            id="toCategories"
            className="button-wide-blue icon-run"
          >
            カテゴリ一覧
          </Link>

          <h1>種目検索</h1>

          <form onSubmit={this.handleToSearchResult}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              renderInputComponent={renderInputComponent}
              inputProps={inputProps}
            />
            <button value="Submit" id="search-button">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <Link to="/record" id="toform">
            Let's
            <br />
            RTA!
          </Link>
        </section>
      </div>
    );
  }
}

export default withRouter(top);
