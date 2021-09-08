import React from "react";
import SubpageHead from "../../components/SubpageHead";
import CategoryForm from "./categoryForm";

import "../../components/forms.scss";
import "./create.scss";

class create extends React.Component {
  render() {
    return (
      <div id="create">
        <SubpageHead title="種目登録" name="create" />
        <p>Create New Event</p>
        <form
          method="POST"
          action="/auth/create"
          class="one-to-one_form"
          className="eventForm"
        >
          <label for="name" class="required">
            種目名&nbsp;
            <span className={"redMust"}>必須</span>
          </label>
          <input type="text" name="name" required></input>
          <label for="bio" class="required">
            種目の説明&nbsp;
            <span className={"redMust"}>必須</span>
          </label>
          <textarea type="text" name="bio"></textarea>
          <CategoryForm />
          <button
            type="submit"
            id={"createButton"}
            class="button-wide-red button-register"
          >
            新規登録
          </button>
        </form>
      </div>
    );
  }
}

export default create;
