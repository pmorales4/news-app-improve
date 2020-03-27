import React, { Component, Fragment } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import BannerAPP from "./components/banner/BannerAPP";
import SideNews from "./components/News/SidebarNews";

class App extends Component {
  render() {
    return (
      <Fragment>
      <header className="App-header">
      <BannerAPP />
    </header>
      <div className="container">
        <div class="row row-cols-2">
         
          <div class="col-sm-8">
            <Main />
          </div>
          <div class="col-sm-4">
            <SideNews />
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default App;
