import React, { Component } from "react";


class TopBanner extends Component {
  render() {
    return (
      <div className="title">
        <h1>Latino World News Outlets </h1>
        <h3>Lo Mejor de tu Pais en Noticias.</h3>
        <h6>Click the Button or Image to be redirected to article.</h6>
        <h6>Oprima botones o foto para leer articulo.</h6>
        <div className='country-favicons'>
            <h5>Venezuela <img src={process.env.PUBLIC_URL + '/venezuela.png'} alt="Venezuela" className='fav'/></h5>
            <h5>Brazil <img src={process.env.PUBLIC_URL + '/brazil.png'} alt="Brazil" className='fav'/></h5>
            <h5>Argentina <img src={process.env.PUBLIC_URL + '/argentina.png'} alt="Argentina" className='fav'/></h5>
            <h5>Cuba <img src={process.env.PUBLIC_URL + '/cuba.png'} alt="Cuba" className='fav'/></h5>
            <h5>Mexico <img src={process.env.PUBLIC_URL + '/mexico.png'} alt="Mexico" className='fav'/></h5>
        </div>
      </div>
    );
  }
}

export default TopBanner;
