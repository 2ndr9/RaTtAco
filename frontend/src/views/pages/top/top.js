import React from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import swim_rattaco from "../../../img/icon/icon.svg";
import axios from "axios";
import "./top.scss";

const tasks = [
  {
    name: "料理",
    hira: "りょうり",
  },
  {
    name: "掃除",
    hira: "そうじ",
  },
  {
    name: "洗濯",
    hira: "せんたく",
  },
  {
    name: "散歩",
    hira: "さんぽ",
  },
  {
    name: "皿洗い",
    hira: "さらあらい",
  },
  {
    name: "魚",
    hira: "さかな",
  },
  {
    name: "鮭",
    hira: "さけ",
  },
  {
    name: "侍",
    hira: "さむらい",
  },
  {
    name: "焼きそば作り",
    hira: "やきそばづくり",
  },
  //...
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return tasks.filter((task) => regex.test(task.name) || regex.test(task.hira));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    // <div>
    //   <Link to="/tasks" id="totasks" className={"suggestionContainer"}>
    <span>{suggestion.name}</span>
    //   </Link>
    // </div>
  );
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
  }

  onChange = (event, { newValue, method }) => {
    this.setState({ value: newValue });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: getSuggestions(value) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  getMe = async () => {
    try {
      await authAxios.get("/users/me").then((res) => {
        this.setState(res.data);
        console.log(this.state);
      });
    } catch (error) {
      console.log(error);
    }
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

          <form>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              renderInputComponent={renderInputComponent}
              inputProps={inputProps}
              placeholder="hoge"
            />
            <Link to="/tag/" id="search-button">
              <i className="fas fa-search"></i>
            </Link>
          </form>
          <Link to="/record" id="toform">
            Let's
            <br />
            RTA!
            {/* <i class="fas fa-stopwatch"></i> */}
          </Link>
        </section>
      </div>
    );
  }
}

export default top;
