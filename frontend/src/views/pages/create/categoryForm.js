import React, { useState } from "react";
import { NestedSelects, Select, Option } from "nested-selects-react";

function CategoryForm() {
  const [state, setState] = useState({
    nestedSelectsValues: null,
  });
  // to get the <Select>'s data
  const getValues = (data) => setState({ ...state, nestedSelectsValues: data });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("hi");
  };

  return (
    <form onSubmit={() => false}>
      {/* nested-selects-react code */}
      <NestedSelects getvalues={getValues}>
        <Select
          name="カテゴリ-選択"
          label="カテゴリ選択"
          placeholder="洗濯してください"
          onchange={handleSubmit}
        >
          <Option value="料理">料理</Option>
          <Option value="掃除">掃除</Option>
          <Option value="洗濯">洗濯</Option>
          <Option value="買い出し">買い出し</Option>
          <Option value="事務">事務</Option>
          <Option value="身だしなみ">身だしなみ</Option>
          <Option value="運動">運動</Option>
        </Select>
      </NestedSelects>
    </form>
  );
}

export default CategoryForm;
