import React, { Fragment, Component } from "react";

class BannerApp extends Component {
  render() {
    return (
      <Fragment>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.imgur.com/UK3FOAz.jpg"
                class="d-block w-100"
                alt="banner"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Hospital Are Under a Strain Due to Corona Virus..</h5>
                <p></p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://i.imgur.com/KDbr5X1.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>La CoronaVirus</h5>
                <p></p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://i.imgur.com/en96Pdd.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Corona Virus and Children Protection...</h5>
                <p></p>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>

          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default BannerApp;
