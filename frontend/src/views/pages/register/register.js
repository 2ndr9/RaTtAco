import React from "react";
import SubpageHead from "../../components/SubpageHead";

import "../../components/forms.scss";

class register extends React.Component {
  render() {
    return (
      <div>
        <SubpageHead title="新規登録" name="register" />
        <form method="POST" action="/auth/register" class="one-to-one_form">
          <label for="name">ユーザー名</label>
          <input type="text" name="name" required></input>
          <label for="bio">自己紹介</label>
          <textarea type="text" name="bio"></textarea>
          <label for="userID" required>
            ユーザーID
          </label>
          <input type="text" name="userID"></input>
          <label for="password" required>
            パスワード
          </label>
          <input type="password" name="password"></input>
          <button type="submit" class="button-wide-red">
            新規登録
          </button>
        </form>
      </div>
    );
  }
}

export default register;
