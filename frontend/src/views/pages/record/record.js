import React, { Component }  from "react";
import StopWatch from '../../components/StopWatch';
import { Link } from "react-router-dom";

class record extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
            task: "1",
            start: "00:00:00",
            end: "00:00:00"
        };
        this.timerEvent = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
  
 
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>登録ページ</p>
        
        <form onSubmit={this.handleSubmit}>
            <label>
                種目を選択:
                <select name="task" value={this.state.task} onChange={this.handleInputChange}>
                    <option value="1">掃除</option>
                    <option value="2">料理</option>
                    <option value="3">洗濯</option>
                </select>
            </label>
            <p>
              <input name="start" type="time" value={this.state.start} onChange={this.handleInputChange} step="1"/>
            </p>
            <p> 
              <input name="end" type="time" value={this.state.end} onChange={this.handleInputChange} step="1"/>
            </p>
        </form>

        <Link to={'/ranking/' + this.state.task}>登録</Link>

        <StopWatch />

      </div>
    );
  }
}

export default record;