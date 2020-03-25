import React, { Fragment } from "react";




const Noticias = ({ item }) => (

  //  <Fragment>
 
  //     <div className="card">
  //       <img src={item.urlToImage} className="card-img-top" alt="Main Pic" />
  //       <div className="card-body">
  //         <h5 className="card-title">{item.title}</h5>
  //         <p className="card-text">{item.description}</p>
  //       </div>
  //       <ul className="list-group list-group-flush">
  //         <li className="list-group-item">Author: {item.author}</li>
  //         <li className="list-group-item">Source: {item.source.name}</li>
  //       </ul>
  //       <div className="card-body">
  //         <a href={item.url} className="card-link">
  //           Read More.
  //         </a>
  //       </div>
  //     </div>
   
  // </Fragment>



<Fragment>
<div className="card">
                <img
                  src={item.urlToImage}
                  className="card-img-top"
                  alt="Article Picture"
                  
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-text">{item.author}</h5>

                  <a
                    href={item.url}
                    className="btn btn-primary btn-lg btn-block"
                    target= "_blank"
                  >
                    Read Me
                  </a>
                </div>
              </div>


</Fragment>

);


export default Noticias;
