import React, { Component, Fragment } from 'react';
import Noticias from "../Countries/Noticias";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.data.type}?${this.props.data.query}&category=business&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335`;


fetch(url)
.then((res) => {
    return res.json();
})
.then((data) => {
    this.setState({
        data: data.articles
    })
})
.catch((err) => console.log(err));
    }


    renderItems() {
        return this.state.data.map((item) => (
            <Noticias key={item.url} item={item} />
        ));
    }


    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        )
         
    }
}

export default Main;