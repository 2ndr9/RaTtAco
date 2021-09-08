import React from "react";
import SubpageHead from "./SubpageHead";
import Image404 from "../../img/theme/404.PNG";

import "./404.scss";

const NotFound = () => {
  return (
    <div id="not_found">
      <SubpageHead title="Not Found" />
      <img src={Image404} alt="404" />
      <p>
        ページが見つかりません。 <br />
        別のタグ、URLをお試しください。
      </p>
    </div>
  );
};

export default NotFound;
