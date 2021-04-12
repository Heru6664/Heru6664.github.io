import React, { Component } from "react";
import Home from "../content/home/home";
import About from "../content/about/about";
import Portofolio from "../content/portofolio/portofolio";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Portofolio />
      </div>
    );
  }
}
