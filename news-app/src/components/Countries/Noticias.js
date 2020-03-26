import React, { Fragment } from "react";




const Noticias = ({ item }) => (

<Fragment>
<div className="card">
                <img
                  src={item.urlToImage}
                  className="card-img-top"
                  alt="article information"
                  
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-text">{item.author}</h5>

                  <a
                    href={item.url}
                    className="btn btn-primary btn-lg btn-block"
                    
                  >
                    Read Me
                  </a>
                </div>
              </div>


</Fragment>

);


export default Noticias;
