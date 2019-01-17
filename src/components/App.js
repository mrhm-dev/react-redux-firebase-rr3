import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateGiveAway from "../pages/CreateGiveAway";
import GiveawayDetailsPage from "../pages/GiveawayDetailsPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/creategiveaway" component={CreateGiveAway} />
            <Route path="/giveaways/:giveawayId" component={GiveawayDetailsPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
