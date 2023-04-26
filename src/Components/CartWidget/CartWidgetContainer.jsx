import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from "../../Contexts/CartContext";
import CartWidget from './CartWidget';
import CartItem from "../CartItem/CartItem";

function CartWidgetContainer (props) {

    const { carrito } = useContext(CartContext);
    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
      setProductsCart(carrito.map((item) => 
        <CartItem item={item} key={item.id}/>)
      ) 
    }, [carrito])

  return (
      <>
        <CartWidget productsCart={productsCart}/>
      </>
    
  )
}

export default CartWidgetContainer;