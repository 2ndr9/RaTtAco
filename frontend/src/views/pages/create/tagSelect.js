import React, { Component } from "react";
import axios from "axios";

import CreatableSelect from "react-select/creatable";

export default class TagSelect extends Component {
  constructor() {
    super();
    this.state = {};
    this.getJson();
  }

  getJson = async () => {
    try {
      const url = "http://20.63.164.137:3000/tags";
      await axios.get(url).then((res) => {
        this.setState(res.data);
      });
      console.log(this.state);
    } catch (error) {
      console.log("error!!");
    }
  };
  handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
    const tags = this.state;
    let options = [];
    for (const i in tags) {
      options.push({
        value: tags[i].name,
        label: tags[i].name,
      });
    }
    const customStyles = {
      menu: () => ({}),
      menuList: (provided) => ({
        ...provided,
        backgroundColor: "#fff",
        maxHeight: "10rem",
        border: "1px solid hsl(0, 0%, 80%)",
        borderRadius: "5px 5px 0 0",
        bottom: "52px",
        position: "absolute",
        width: "100%",
      }),
      option: (provided) => ({
        ...provided,
        backgroundColor: "#fff",
      }),
    };
    return (
      <CreatableSelect
        name="tag"
        isMulti
        onChange={this.handleChange}
        className="tagSelect"
        styles={customStyles}
        options={options}
        placeholder="その他のタグを入力または選択"
      />
    );
  }
}
