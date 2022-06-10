import React from "react";
import Select from "react-select";
import SubpageHead from "../../components/SubpageHead";
import TagSelect from "./tagSelect";
import options from "../../components/categoryTags";
import axios from "axios";

import "../../components/forms.scss";
import "./create.scss";

class create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      maintag: "",
      isPrivate: true,
      tag: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleChange = (e) => {
    console.log(e.label);
    const maintag = e.label;
    this.setState({ maintag: maintag });
    console.log(maintag);
  };

  tagSelectHandleChange = (event) => {
    const tags = event.map((e) => {
      return e.value;
    });
    console.log(tags);
    this.setState({ tag: tags });
  };

  handleSubmit(event) {
    event.preventDefault();
    const tags = this.state.tag;
    const sendTags = [...tags, this.state.maintag];
    const task = {
      name: this.state.name,
      description: this.state.description,
      isPrivate: this.state.isPrivate,
      tags: sendTags,
    };

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("https://rattaco-backend.herokuapp.com/tasks", task, {
        headers: headers,
      })
      .then((res) => {
        console.log("record submit");
        console.log(res);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    const customStyles = {
      menu: () => ({}),
      menuList: (provided) => ({
        ...provided,
        backgroundColor: "#fff",
        border: "1px solid hsl(0, 0%, 80%)",
        borderRadius: "5px 5px 0 0",
        maxHeight: "10rem",
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
      <div id="create">
        <SubpageHead title="種目登録" name="create" />
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          action="/auth/create"
          className="one-to-one_form eventForm"
        >
          <label for="name" className="required">
            種目名
          </label>
          <input
            type="text"
            name="name"
            required
            onChange={this.handleInputChange}
          />
          <label for="bio" className="required">
            種目の説明
          </label>
          <textarea
            type="text"
            name="description"
            required
            onChange={this.handleInputChange}
          />
          <label for="category_tag" className="required">
            種目タグ
          </label>
          <Select
            name="tag"
            options={options}
            placeholder=""
            styles={customStyles}
            onChange={this.handleChange}
          />
          <TagSelect
            type="tag"
            tagSelectHandleChange={this.tagSelectHandleChange}
          />
          <button
            onClick={this.handleSubmit}
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
