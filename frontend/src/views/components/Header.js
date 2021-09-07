import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/icon/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
    );
  }
}

export default Header;
