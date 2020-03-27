import React, { Component } from "react";
import NoticiasPush2 from "../Countries/NoticiasPush2";

class SidebarNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mexicoNews: []
    };
  }

  componentDidMount() {
    const papi = process.env.REACT_APP_LA_CLAVE;
    const mexico =
      "http://newsapi.org/v2/top-headlines?country=mx&apiKey=" + papi;
    fetch(mexico)
      .then(res => {
        return res.json();
      })
      .then(mx => {
        this.setState({
          mexicoNews: mx.articles.slice(0, 11)
        });
      })
      .catch(err => console.log(err));
  }

  getMexico() {
    return this.state.mexicoNews.map(item => (
      <NoticiasPush2 key={item.url} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.getMexico()}</div>;
  }
}

export default SidebarNews;
