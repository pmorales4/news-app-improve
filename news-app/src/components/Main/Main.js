import React, { Component, Fragment } from "react";
import MultiNews from "../News/MultiNews";
import Footer from "../Footer/Footer";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <MultiNews />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
