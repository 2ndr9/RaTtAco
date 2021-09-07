import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import top from "./views/pages/top/top";
import record from "./views/pages/record/record";
import ranking from "./views/pages/ranking/ranking.jsx";
import Header from "./views/components/Header";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
          <Route exact path="/" component={top} />
          <Route exact path="/record" component={record} />
          <Route exact path="/ranking" component={ranking} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
