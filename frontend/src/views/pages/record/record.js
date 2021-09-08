import React from "react";
import StopWatch from '../../components/StopWatch';
import { Link } from "react-router-dom";

class record extends React.Component {

   constructor(props) {
        super(props);
        this.state = {
            task: "1",
            start: "--/--/--/ --:--:--.--",
            end: "--/--/--/ --:--:--.--"
        };
        this.timerEvent = React.createRef();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getTime = this.getTime.bind(this);
        this.resetTime = this.resetTime.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
   
     getTime(event){
        const now = new Date();
        const Year = now.getFullYear();
        const Month = now.getMonth()+1;
        const daTe = now.getDate();
        const Hour = ("0"+now.getHours()).slice(-2);
        const Min = ("0"+now.getMinutes()).slice(-2);
        const Sec = ("0"+now.getSeconds()).slice(-2);
        const MiliSec = Math.round(now.getMilliseconds()/10);
        const Now = Year + "/" + Month + "/" + daTe + " " + Hour + ":" + Min + ":" + Sec + "." + MiliSec;
        const name=event.target.name;
        console.log(Now)
        this.setState({
              [name]: Now
        });
           
    }

    resetTime(){
      this.setState({
        start: "--/--/--/ --:--:--.--",
        end: "--/--/--/ --:--:--.--"
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
              <input type="text" value={this.state.start} disabled/>
            </p>
            <p> 
              <input type="text" value={this.state.end} disabled/>
            </p>
        </form>

        <Link to={'/ranking/' + this.state.task}>登録</Link>

        <StopWatch getTime={this.getTime} resetTime={this.resetTime}/>

      </div>
    );
  }
}

export default record;