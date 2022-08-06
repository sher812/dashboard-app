import React, { Component } from "react";
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Mainbody from "./components/Mainbody.js";

class App extends Component {
  render() {
    return(
      <div className="content-body">
        <Header />
        <Mainbody />
        <Footer />
      </div>
    )
  }
}

export default App;
