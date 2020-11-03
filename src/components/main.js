import React from "react";
import Home from "./Home/home";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "./updates/timeline";
import Help from "./help/help";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contribute from './contribute/contribute'
import Posters from './posters/posters'


const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="one__page">
            <Home />
            <br />
            <div className="timeline" id="timeline">
              <Timeline />
            </div>
            <div className="posters" id='posters'>
              <Posters />
            </div>
          </div>
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
        <Route exact path="/contribute">
          <div className="contribute">
            <Contribute />
          </div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default Main;
