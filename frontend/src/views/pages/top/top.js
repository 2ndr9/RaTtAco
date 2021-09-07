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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            delectus ex quaerat numquam fugiat saepe doloremque rem molestiae
            architecto quisquam, exercitationem ducimus officia aperiam illo,
            quam debitis eos dicta expedita.
          </p>
          <form method="POST" action="/">
            <p>
              <input type="text" />
              <button type="submit">
                <i class="fas fa-search"></i>
              </button>
            </p>
          </form>

          <Link
            to="/ranking"
            id="toranking"
            className="button-wide-blue icon-crown"
          >
            ランキング
          </Link>

          <Link to="/record" id="toform">
            Let's
            <br />
            RTA!
            {/* <i class="fas fa-stopwatch"></i> */}
          </Link>
        </section>
      </div>
    );
  }
}

export default top;
