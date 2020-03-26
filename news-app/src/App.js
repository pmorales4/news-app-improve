import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import BannerAPP from "./components/banner/BannerAPP";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BannerAPP />
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
