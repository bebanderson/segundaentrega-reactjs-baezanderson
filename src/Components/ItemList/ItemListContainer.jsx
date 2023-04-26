import React, { useContext } from 'react';
import { ProductsContext } from '../../Contexts/ProductsContext';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Item from "../Item";

function ItemListContainer() {

    const {idCategory} = useParams();
    const { product } = useContext(ProductsContext);
    let productsList = [];

    if(idCategory){
      productsList = product.filter(item => item.category === idCategory).map((item) => 
      <Item item={item} key={item.id}/>)
    } else {
      productsList = product.map((item) => 
      <Item item={item} key={item.id}/>)
    }

  return (
      <>
            <ItemList title={(idCategory)?idCategory:"Nuestros Productos"} products={productsList}/>
      </>
    
  )
}

export default ItemListContainer;