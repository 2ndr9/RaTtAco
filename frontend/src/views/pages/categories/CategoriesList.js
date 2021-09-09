import React from "react";
import CategoriesCard from "./CategoriesCard";

class CategoriesList extends React.Component {
  render() {
    const categories = this.props.tasks;
    // console.log(taskList);
    const categoriesCardWrapper = [];
    for (const i in categories) {
      categoriesCardWrapper.push(
        <CategoriesCard
          taskTitle={categories[i].label}
          taskName={categories[i].value}
          taskInfo={categories[i].description}
        />
      );
    }
    console.log(categoriesCardWrapper);
    return (
      <section id="taskList">
        {categoriesCardWrapper}
        {/* <TaskCard
          taskTitle="掃除"
          taskName="cleaning"
          taskInfo="掃除の説明が入ります。掃除の説明が入ります。掃除の説明が入ります。掃除の説明が入ります。"
        />
        <TaskCard
          taskTitle="料理"
          taskName="cooking"
          taskInfo="料理の説明が入ります。"
        />
        <TaskCard
          taskTitle="洗濯"
          taskName="washing"
          taskInfo="洗濯の説明が入ります。"
        /> */}
      </section>
    );
  }
}

export default CategoriesList;
