import React, { Component } from "react";


class TopBanner extends Component {
  render() {
    return (
      <div className="title">
        <h1>Latino World News Outlets </h1>
        <h3>Lo Mejor de tu Pais en Noticias.</h3>
        <h6>Click the Button or Image to be redirected to article.</h6>
        <h6>Oprima botones o foto para leer articulo.</h6>

        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        {/* <a className='navbar-brand' href=""></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarTogglerDemo02">

            <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Mexico <img src={process.env.PUBLIC_URL + '/mexico.png'} alt="Mexico" className='fav'/></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Venezuela <img src={process.env.PUBLIC_URL + '/venezuela.png'} alt="Venezuela" className='fav'/></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Brazil <img src={process.env.PUBLIC_URL + '/brazil.png'} alt="Brazil" className='fav'/></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Cuba <img src={process.env.PUBLIC_URL + '/cuba.png'} alt="Cuba" className='fav'/></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Argentina <img src={process.env.PUBLIC_URL + '/argentina.png'} alt="Argentina" className='fav'/></a>
                </li>
            </ul>
        </div>

    </nav>
      </div>
    );
  }
}

export default TopBanner;
