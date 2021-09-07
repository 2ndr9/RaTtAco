import React from "react";
import { Link } from "react-router-dom";
import "./top.scss";

class top extends React.Component {
  render() {
    return (
      <div>
        <section id="eyecatch" className="full-width">
          <p>
            生活のアクセルを踏み込む、
            <br />
            日常生活RTA(リアル･タイム･アタック)アプリ
          </p>
        </section>
        <section>
          <p>
            料理するのがめんどくさいんんじゃあああああああああああああああああああというそこのあなたに！今から15分で作り切りませんか？家事をなんでもタイムアタックにRaTtAco！
          </p>

          <form method="POST" action="/">
            <p>
              <input type="text" />
            </p>
          </form>

          <Link to="/ranking" id="toranking" className="button-wide-blue">
            ランキング
          </Link>

          <Link to="/record" id="toform">
            +
          </Link>
        </section>
      </div>
    );
  }
}

export default top;
