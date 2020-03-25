import React, { Component } from "react";
import "./App.css";
import Main from "./components/News/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      argentina: {
        type: 'top-headlines',
        query: 'country=ar'
      },
      mexico: {
        type: 'top-headlines',
        query: 'country=mx'
      },
      brazil: {
        type: 'top-headlines',
        query: 'country=br'
      }
    };
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">News API Application</h1>
      </header>

      <Main data={this.state.argentina}/>
      <Main data={this.state.mexico}/>
      <Main data={this.state.brazil}/>
    </div>
  );
}
}

export default App;
