import React from "react";
import SubpageHead from "../../components/SubpageHead";
import CategoriesList from "./CategoriesList";
import categoryTags from "../../components/categoryTags";

import "../../components/tasks/tasks.scss";

class tasks extends React.Component {
  render() {
    return (
      <div>
        <SubpageHead title="カテゴリ一覧" name="categories" />
        <CategoriesList tasks={categoryTags} />
      </div>
    );
  }
}

export default tasks;
