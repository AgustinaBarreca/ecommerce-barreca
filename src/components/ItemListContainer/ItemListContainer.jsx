import "./ItemListContainer.css";
import React, {useState} from 'react';


import { ItemList } from '../ItemList/ItemList.jsx';

// 
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

 
export const ItemListContainer = () => {

  const [productList, setProductList] = useState([]);

  promiseItem.then(res => setProductList(res));
  
    return (
      <>
        < ItemList
          items={productList} />
      </>
    );

  }


let promiseItem = new Promise((resolve, reject) => {
  let listItems = [{
    id: 1,
    pictureUrl: "https://woker.vteximg.com.br/arquivos/ids/194288-1000-1000/4CJ0636-100-2.jpg?v=637515986347970000",
    title: 'Zapatillas',
    description: 'descripcion zapatillas',
    price: 50,
  }, {
    id: 2,
    pictureUrl: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbb967489/products/NI_BV4004-363/NI_BV4004-363-1.JPG",
    title: 'Remera',
    description: 'descripcion zapatillas',
    price: 50,
  },
  {
    id: 3,
    pictureUrl: "https://www.ansilta.com/img/articulos/2021/07/campera_rider_ski_imagen1.jpg",
    title: 'Campera',
    description: 'descripcion zapatillas',
    price: 50,
  }];

  setTimeout(function () {
    resolve(listItems);
  }, 2000);
}
);


export default ItemListContainer;




