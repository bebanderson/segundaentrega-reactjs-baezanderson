import React, { useContext } from "react";
import { ProductsContext } from '../../Contexts/ProductsContext';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail' ;

function ItemDetailContainer(){

    const { idItem } = useParams();
    const { product } = useContext(ProductsContext);
  
    const productItem = product.find(item => item.id === idItem.toString());

    return(
        <>
            { productItem ? <ItemDetail product={productItem}/>  : null }
        </>
    )

}

export default ItemDetailContainer;