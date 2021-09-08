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
    console.log(options);
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
        className="tagSelect"
        options={options}
        placeholder="その他のタグを入力または選択"
      />
    );
  }
}
