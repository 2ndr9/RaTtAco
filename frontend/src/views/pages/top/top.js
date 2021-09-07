import React from "react";
import { Link } from "react-router-dom";
class top extends React.Component {

  render() {
    return (
      <div>
        <p>料理するのがめんどくさいんんじゃあああああああああああああああああああというそこのあなたに！今から15分で作り切りませんか？家事をなんでもタイムアタックにRaTtAco！</p>

        <form　method="POST" action="/">
          <p><input type="text"/></p>
        </form>
        
        <Link to="/record" id="toform">+</Link>
      </div>
    );
  }
}

export default top;
