import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import top from "./views/pages/top/top";
import record from "./views/pages/record/record";

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
         
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
