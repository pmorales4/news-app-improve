import React, { Component } from "react";
import "./App.css";
import Main from "./components/News/Main";

console.log(process.env.REACT_APP_NEWS_API_KEY);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News API Application</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
