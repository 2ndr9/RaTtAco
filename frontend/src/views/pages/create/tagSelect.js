import React, { Component } from "react";
import axios from "axios";

import CreatableSelect from "react-select/creatable";

export default class TagSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getJson();
  }

  getJson = async () => {
    try {
      const url = "https://rattaco-backend.herokuapp.com/tags";
      await axios.get(url).then((res) => {
        this.setState(res.data);
      });
      console.log(this.state);
    } catch (error) {
      console.log("error!!");
    }
  };

  //   tags(event)  {
  //     const tags = event.map((e) => {
  //       return e.value;
  //     })
  //   return tags
  // };

  // handleChange = (newValue, actionMeta) => {
  //   {
  //     newValue.map((e) => {
  //       this.props.tagSelectHandleChange(e);
  //     });
  //   }
  // };

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
        onChange={(e) => {
          this.props.tagSelectHandleChange(e);
        }}
        className="tagSelect"
        styles={customStyles}
        options={options}
        placeholder="その他のタグを入力または選択"
      />
    );
  }
}
