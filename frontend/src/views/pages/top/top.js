import React from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import swim_rattaco from "../../../img/icon/icon.svg";

import "./top.scss";

const languages = [
  {
    name: "掃除",
  },
  {
    name: "洗濯",
  },
  {
    name: "散歩",
  },
  {
    name: "皿洗い",
  },
  {
    name: "焼きそば作り",
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

  return languages.filter((language) => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <div>
      <Link to="/tasks" id="totasks" className={"suggestionContainer"}>
        <span>{suggestion.name}</span>
      </Link>
    </div>
  );
}

const renderInputComponent = (inputProps) => (
  <div>
    <input id="city-name-suggestion" className="form-control" {...inputProps} />
  </div>
);

class top extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
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

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "search",
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
            <br class="pc-none" />
            送っています。
          </p>
          <p>
            少しでも早く、誰よりも早く、
            <br class="pc-none" />
            このタスクを終わらせたい！
            <br />
            そんなときには<strong>RaTtAco</strong>(ラタッコ)。
          </p>
          <p>
            ゲームのRTA(リアル・タイム・アタック)から
            <br class="pc-none" />
            着想を得たサービスが、
            <br class="pc-none" />
            あなたのスピード生活をサポートします。
          </p>

          <div className="wrapper_swim_rattaco">
            <img src={swim_rattaco} alt="icon" className="swim_rattaco" />
          </div>

          <Link to="/tasks" id="totasks" className="button-wide-blue icon-run">
            種目一覧
          </Link>

          <h1>種目検索</h1>

          <form method="POST" action="/">
            <p>
              {/* <input type="text" />
              <button type="submit" id="search-button">

                <i class="fas fa-search"></i>
              </button> */}

              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={inputProps}
              />

              {/*     <i className="fas fa-search"></i>
               </button> */}

            </p>
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
