import React, { Component } from "react";
import Noticias from "../Countries/Noticias";
import Noticias2 from "../Countries/Noticias2";

class MultiNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usa: [],
      colombiaNews: [],
      mexicoNews: []
    };
  }

  componentDidMount() {
    const papi = process.env.REACT_APP_LA_CLAVE;
   
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=" + papi;

    const colombia =
      "http://newsapi.org/v2/top-headlines?country=co&apiKey=" + papi;
    
      const mexico = "http://newsapi.org/v2/top-headlines?country=mx&apiKey=" + papi

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


      fetch(mexico)
      .then(res => {
        return res.json();
      })
      .then(mx => {
        this.setState({
          mexicoNews: mx.articles.slice(0, 6)
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
  getMexico() {
    return this.state.mexicoNews.map(item => (
      <Noticias2 key={item.url} item={item} />
    ));
  }


  render() {
    return (
      <div className="row">
        {this.renderItems()}
        {this.getColombia()}
        {this.getMexico()}
      </div>
      
    );
  }
}

export default MultiNews;
