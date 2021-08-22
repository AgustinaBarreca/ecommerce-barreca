import React from 'react';

import {Item} from '../Item/Item.jsx';


// 
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>


export const ItemList = ({items}) => {

  let listItems = 'Loading...';

  if(Array.isArray(items)) {
     listItems = items.map( (item) =>
        <Item id={item.id} 
        title={item.title} 
        description={item.description} 
        pictureUrl={item.pictureUrl} 
        id={item.id}
        price={item.price} 
        />
        
        // <Item {...item} />
        )
  }


  return (
    <ul>   
 {listItems}
    </ul>  
  );
}



