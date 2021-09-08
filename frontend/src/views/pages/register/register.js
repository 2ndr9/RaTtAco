import React from "react";
import axios from 'axios';
import SubpageHead from "../../components/SubpageHead";

import "../../components/forms.scss";
import "./register.scss";

class register extends React.Component {

  constructor(){
    super();
    const token = localStorage.getItem("token");
    let isLogedIn = true
    if (token === null) {
      isLogedIn = false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      bio: "",
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
    const user = {
      name: this.state.name,
      bio: this.state.bio,
      userID: this.state.userID,
      password: this.state.password,  
    };
    
    const headers = {
      'Content-Type': 'application/json',
    }
    axios.post("http://20.63.164.137:3000/auth/register", user , {headers: headers})
      .then(response =>{
          localStorage.setItem("token",response.data.access_token)
          console.log("hoge")
          console.log(response)
          this.setState ({
            isLogedIn : true
          })
      })
      .catch(error => {
        console.log(error.response)
      });
  }
  render() {
    return (
      <div id="register">
        <SubpageHead title="新規登録" name="register" />
        <p>赤枠は必須項目です。</p>
        <form onSubmit={this.handleSubmit}>
          <span>{this.state.error}</span>
          <label for="name" class="required">
            ユーザー名
          </label>
          <input type="text" name="name" onChange={this.handleInputChange} required></input>
          <label for="bio">自己紹介</label>
          <textarea type="text" name="bio" value={this.state.bio} onChange={this.handleInputChange}/>
          <label for="userID" class="required">
            ユーザーID
          </label>
          <input type="text" name="userID" onChange={this.handleInputChange} required></input>
          <label for="password" class="required">
            パスワード
          </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required/>
          <button type="submit" value="Submit" class="button-wide-red button-register">
            新規登録
          </button>
        </form>
      </div>
    );
  }
}

export default register;
