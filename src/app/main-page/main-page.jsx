import React, { Component } from "react";
import Home from "../home/home";
import About from "../about/about";
import Portofolio from "../portofolio/portofolio";

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
