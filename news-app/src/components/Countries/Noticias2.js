import React, { Fragment } from "react";

const Noticias2 = ({ item }) => (

<Fragment>

<div id='sm-pic'  className="card bg-white text-black ">

<a
                    href={item.url} >
                    <img src={item.urlToImage} class="card-img" alt="..." />
                    
                  </a>
                 
                  
  {/* <div className="card-img-overlay"> */}
    {/* <h5 className="card-title">{item.title}</h5>
   */}


  {/* </div> */}
</div>

</Fragment>







);
export default Noticias2;