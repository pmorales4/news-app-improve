import React, { Component, Fragment } from "react";

class ArgentinaNews extends Component {
  render() {
    return (
      <Fragment>
        {this.props.data ? (
          <div>
            {this.props.data.map(articles => (
              <div className="card">
                <img
                  src={articles.urlToImage}
                  className="card-img-top"
                  alt="Main Pic"
                />
                <div className="card-body">
                  <h5 className="card-title">{articles.title}</h5>
                  <p className="card-text">{articles.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Author: {articles.author}</li>
                  <li class="list-group-item">
                    Publish Date: {articles.publishedAt}
                  </li>
                </ul>
                <div class="card-body">
                  <a href={articles.url} class="card-link">
                    Article Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1></h1>
        )}
      </Fragment>
    );
  }
}

export default ArgentinaNews;
