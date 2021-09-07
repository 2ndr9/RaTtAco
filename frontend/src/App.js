import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import top from "./views/pages/top/top";
import Header from "./views/components/Header";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={top} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
