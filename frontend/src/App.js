import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "./views/components/ScrollToTop";

import top from "./views/pages/top/top";
import Register from "./views/pages/register/register";
import Login from "./views/pages/login/login";
import record from "./views/pages/record/record";
import tasks from "./views/pages/tasks/tasks";
import result from "./views/pages/result/result";
import ranking from "./views/pages/ranking/ranking.jsx";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";
import  Auth  from './Auth';
import "./App.scss";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLogedIn:false
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/bdacb9a226.js"
            crossorigin="anonymous"
          ></script>
          <script>
            {`
          (function(d) {
            var config = {
              kitId: 'nkn0nbx',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        `}
          </script>
        </Helmet>
        <ScrollToTop />
        <Header />
        <main>
            <Switch>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login"  component={Login}/>
            </Switch>

          <Switch>
            <Route exact path="/" component={top} />
            <Auth>
              <Switch>
                <Route exact path="/record" component={record} />
                <Route path="/tag/:id" component={result} />
              </Switch>
            </Auth>
            <Route exact path="/tasks" component={tasks} />
            <Route path="/ranking/:id" component={ranking} />
          </Switch>

          

        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

