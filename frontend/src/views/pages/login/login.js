import React from "react";
import axios from 'axios';
import SubpageHead from "../../components/SubpageHead";
import { Link } from "react-router-dom";

import "../../components/forms.scss";
class login extends React.Component {
  constructor(){
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const token = localStorage.getItem("token");
    let isLogedIn = true
    
    if (token === null) {
        isLogedIn = false
    }

    this.state = {
      userID: "",
      password: "",
      error: ""
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log("hogehoge")
    const user = {
      userID: this.state.userID,
      password: this.state.password,
    };

    axios.post("http://20.63.164.137:3000/auth/login", { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response)
        this.setState({ error: error.response.message})
      });
  }

  render() {
    return (
      <div id="login">
        <SubpageHead title="ログイン" name="login" />
        <form onSubmit={this.handleSubmit}>
          <label for="userID" class="required">
            ユーザーID
          </label>
          <input type="text" name="userID" onChange={this.handleInputChange} required></input>
          <label for="password" class="required">
            パスワード
          </label>
          <input type="password" name="password" onChange={this.handleInputChange} required></input>
          <button type="submit" value="Submit" class="button-wide-blue button-register">
            ログイン
          </button>
          <Link to={"/register"}>新規登録</Link>
        </form>
      </div>
    );
  }
}

export default login;
