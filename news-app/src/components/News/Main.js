import React, { Component, Fragment } from 'react';
import ArgentinaNews from "../Countries/Argentina";


class Main extends Component {
    constructor() {
        super();

        this.state = {
            newsData: [],
        }
    }

    componentDidMount() {
        const url = 'http://newsapi.org/v2/top-headlines?country=ar&apiKey=63f2a4bf5bdd42b3bf1f0851aa78b335';

        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                newsData: res.articles
            });
        })
        .catch((error) => console.log(error));
    }

    render() {
        return (
            <Fragment>
            <ArgentinaNews data={this.state.newsData} />
            </Fragment>
        )
    }
}

export default Main;