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
const baseurl = "https://rattaco-backend.herokuapp.com/";
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

  componentDidMount() {
    this.setState(
      {
        login: token,
      },
      () => {
        console.log(this.state.login);
      }
    );
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
      const url = "https://rattaco-backend.herokuapp.com/tags/";
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
      placeholder: "???: ??????????????????etc...",
      value,
      onChange: this.onChange,
      className: "form-control form-control-lg",
    };

    return (
      <div id="top">
        <section id="eyecatch" className="full-width">
          <p>
            ???????????????????????????????????????
            <br />
            ????????????RTA(????????????????????????????????????)?????????
          </p>
        </section>
        <section>
          <p>
            ?????????????????????????????????......
            <br />
            ????????????????????????????????????????????????????????????
            <br className="pc-none" />
            ?????????????????????
          </p>
          <p>
            ??????????????????????????????????????????
            <br className="pc-none" />
            ???????????????????????????????????????
            <br />
            ?????????????????????<strong>RaTtAco</strong>(????????????)???
          </p>
          <p>
            ????????????RTA(????????????????????????????????????)??????
            <br className="pc-none" />
            ?????????????????????????????????????????????
            <br className="pc-none" />
            ?????????????????????????????????????????????
          </p>

          <div className="wrapper_swim_rattaco">
            <img src={swim_rattaco} alt="icon" className="swim_rattaco" />
          </div>

          <Link
            to="/categories"
            id="toCategories"
            className="button-wide-blue icon-run"
          >
            ??????????????????
          </Link>

          <h1>????????????</h1>

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

          {!this.state.login ? (
            <></>
          ) : (
            <button
              id="button_logout"
              onClick={() => {
                const atoken = localStorage.getItem("token");
                if (atoken === null) {
                  console.log("???????????????????????????");
                } else {
                  localStorage.removeItem("token");
                  this.setState({ login: null });
                }
              }}
            >
              <i className="fas fa-sign-out-alt"></i>
            </button>
          )}

          {/* <MyPage isLoggedIn={isLoggedIn} /> */}
        </section>
      </div>
    );
  }
}

export default withRouter(top);
