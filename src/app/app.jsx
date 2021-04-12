import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./layout/layout";
import MainPage from "./main-page/main-page";
import Home from "./content/home/home";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <div id="router-wrapper">
            <Route exact path="/" component={MainPage} />
            <Route path="/home" component={Home} />
          </div>
        </Router>
      </Layout>
    );
  }
}
