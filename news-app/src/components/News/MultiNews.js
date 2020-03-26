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
    const papi = process.env.REACT_APP_LA_CLAVE;
   
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=" + papi;

    const colombia =
      "http://newsapi.org/v2/top-headlines?country=co&apiKey=" + papi;
    

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
