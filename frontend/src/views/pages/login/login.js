import React from "react";
import axios from "axios";
import SubpageHead from "../../components/SubpageHead";
import { Link } from "react-router-dom";

import "../../components/forms.scss";
import "../register/register.scss";

class Login extends React.Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const token = localStorage.getItem("token");
    console.log(token);
    this.state = {
      userID: "",
      password: "",
      isLogedIn: true,
      error: "",
    };
  }

  handleRedirect() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.history.push("/");
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("hogehoge");
    const user = {
      userID: this.state.userID,
      password: this.state.password,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("https://rattaco-backend.herokuapp.com/auth/login", user, {
        headers: headers,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        console.log(res);
        console.log(res.data);
        this.handleRedirect();
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ error: error.response.message });
      });
  }

  render() {
    return (
      <div id="login">
        <SubpageHead title="ログイン" name="login" />
        <form className="one-to-one_form" onSubmit={this.handleSubmit}>
          <label for="userID" class="required">
            ユーザーID
          </label>
          <input
            type="text"
            name="userID"
            onChange={this.handleInputChange}
            required
          ></input>
          <label for="password" class="required">
            パスワード
          </label>
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            required
          ></input>
          <button
            type="submit"
            value="Submit"
            class="button-wide-blue button-register"
          >
            ログイン
          </button>
          <Link to={"/register"} className="button-wide-red button-register">
            新規登録
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
