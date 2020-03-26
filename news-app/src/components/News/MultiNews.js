import React, { Component } from "react";
import Noticias from "../Countries/Noticias";

class MultiNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usa: [],
      colombiaNews: []
    };
  }

  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335';

    const colombia =
      "http://newsapi.org/v2/top-headlines?country=co&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335";

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          usa: data.articles.slice(0, 6)
        });
      })
      .catch(err => console.log(err));

    fetch(colombia)
      .then(res => {
        return res.json();
      })
      .then(co => {
        this.setState({
          colombiaNews: co.articles.slice(0, 6)
        });
      })
      .catch(err => console.log(err));
  }

  renderItems() {
    return this.state.usa.map(item => <Noticias key={item.url} item={item} />);
  }

  getColombia() {
    return this.state.colombiaNews.map(item => (
      <Noticias key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
       {this.getColombia()}
      </div>
    );
  }
}

export default MultiNews;
