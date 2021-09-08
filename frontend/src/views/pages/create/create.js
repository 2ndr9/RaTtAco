import React from "react";
import Select from "react-select";
import SubpageHead from "../../components/SubpageHead";
import TagSelect from "./tagSelect";
import options from "../../components/categoryTags";

import "../../components/forms.scss";
import "./create.scss";

class create extends React.Component {
  render() {
    return (
      <div id="create">
        <SubpageHead title="種目登録" name="create" />
        <form
          method="POST"
          action="/auth/create"
          className="one-to-one_form eventForm"
        >
          <label for="name" className="required">
            種目名
          </label>
          <input type="text" name="name" required></input>
          <label for="bio" className="required">
            種目の説明
          </label>
          <textarea type="text" name="bio" required></textarea>
          <label for="category_tag" className="required">
            種目タグ
          </label>
          <Select options={options} placeholder="" />
          <TagSelect />
          <button
            type="submit"
            id={"createButton"}
            className="button-wide-red button-register"
          >
            新規登録
          </button>
        </form>
      </div>
    );
  }
}

export default create;
