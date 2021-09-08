import React from "react";
import SubpageHead from "../../components/SubpageHead";

import "../../components/forms.scss";

class login extends React.Component {
  render() {
    return (
      <div id="login">
        <SubpageHead title="ログイン" name="login" />
        <form method="POST" action="/auth/register" class="one-to-one_form">
          <label for="userID" class="required">
            ユーザーID
          </label>
          <input type="text" name="userID" required></input>
          <label for="password" class="required">
            パスワード
          </label>
          <input type="password" name="password" required></input>
          <button type="submit" class="button-wide-blue button-register">
            ログイン
          </button>
        </form>
      </div>
    );
  }
}

export default login;
