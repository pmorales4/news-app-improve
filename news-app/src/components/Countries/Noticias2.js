import React, { Fragment } from "react";

const Noticias2 = ({ item }) => (
  <Fragment>
    <div id="sm-pic" className="card bg-white text-black ">
   
      <img src={item.urlToImage} class="card-img" alt="..." />
      <div className="text-title">
      
     
       <a href={item.url}>
          <h5 className="card-title sm-title">{item.title}</h5>
        </a>
    </div>
    </div>
  </Fragment>
);
export default Noticias2;
