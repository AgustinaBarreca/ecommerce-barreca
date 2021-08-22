import React from 'react';

import "./Item.css";


// 
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>


export const Item = (item) => {

  return (
    <>
      <div className="container-item">

        <div className="">
          <div className="item-image-container">
            <img src={item.pictureUrl} alt="" />
          </div>
          <h2 className="title-item">
            {item.id}
          </h2>
          <h5 className="description-item">
            {item.description}
          </h5>
          <h4 className="price-item">
            {item.price}
          </h4>
        </div>


      </div>
    </>
  );
}

