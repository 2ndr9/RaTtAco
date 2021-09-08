import React from "react";
import SubpageHead from "../../components/SubpageHead";

import "../../components/forms.scss";
import "./register.scss";

class register extends React.Component {
  render() {
    return (
      <div id="register">
        <SubpageHead title="新規登録" name="register" />
        <p>赤枠は必須項目です。</p>
        <form method="POST" action="/auth/register" class="one-to-one_form">
          <label for="name" class="required">
            ユーザー名
          </label>
          <input type="text" name="name" required></input>
          <label for="bio">自己紹介</label>
          <textarea type="text" name="bio"></textarea>
          <label for="userID" class="required">
            ユーザーID
          </label>
          <input type="text" name="userID" required></input>
          <label for="password" class="required">
            パスワード
          </label>
          <input type="password" name="password" required></input>
          <button type="submit" class="button-wide-red button-register">
            新規登録
          </button>
        </form>
      </div>
    );
  }
}

export default register;
