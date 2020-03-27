import React, { Fragment } from "react";

const Noticias = ({ item }) => (
  <Fragment>
    <div className="card">
      <img
        className="card-img-top"
        src={item.urlToImage}
        alt="article information"
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h5 className="card-text">Source: {item.source.name}</h5>
        <a href={item.url} className="btn btn-primary btn-sm" target="_blank">
          Read Me
        </a>
      </div>
    </div>
  </Fragment>
);

export default Noticias;
