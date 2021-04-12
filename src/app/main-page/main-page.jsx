import React, { Component } from "react";
import Home from "../content/home/home";
import About from "../content/about/about";
import Portofolio from "../content/portofolio/portofolio";
import Contact from "../content/contact/contact";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Portofolio />
        <Contact />
      </div>
    );
  }
}
