import React, { createContext, useEffect, useState, useContext } from "react"; 
import { ProductsContext } from "./ProductsContext";

export const CartContext = createContext();

function CartContextProvider ( {children} ) {

    let [carrito, setCarrito] = useState([]);
    let [compraTotal, setCompraTotal] = useState(0);
    let [carritoSize, setCarritoSize] = useState(0);
    let [emptyBag, setEmptyBag] = useState(true);

    const { addStock } = useContext(ProductsContext);
    const { removeStock } = useContext(ProductsContext);

    function addItemCart (product, cantidad) {
        let indexArr = isInList(product.id); 
        if (indexArr<0){
            setCarrito([...carrito, {id:product.id, name:product.name, img:product.img, price:product.price, cantidad}]);
        } else {
            carrito[indexArr].cantidad += cantidad;
            setCarrito([...carrito]);
        } 
        removeStock(product.id, cantidad);
    }

    function removeItemCart (idProd){
        let indexArr = isInList(idProd);
        carrito[indexArr].cantidad -= 1;
        addStock(idProd, 1);
        setCarrito([...carrito]);
    }

    function removeProduct (idProd){
        let indexArr = isInList(idProd); 
        addStock(idProd, carrito[indexArr].cantidad);
        carrito.splice(indexArr,1);
        setCarrito([...carrito]);
    }

    function isInList (idProd) {
        return carrito.findIndex(producto => producto.id === idProd); 
    }

    function cartItems (carrito){
        let total = 0;
        for (var i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad;
        }
        setCarritoSize(total);
    }

    function cartTotal (carrito){
        let total = 0;
        for (var i = 0; i < carrito.length; i++) {
            total += carrito[i].cantidad * carrito[i].price;
        }
        setCompraTotal(total);
    }
  
    useEffect(() => {
        cartTotal(carrito);
        cartItems(carrito);
    }, [carrito])

    useEffect(() => {
        if(carritoSize === 0){
            setEmptyBag(true);
        } else {
            setEmptyBag(false);
        }
    }, [carritoSize])

    return ( 
        <>
            <CartContext.Provider value={{carrito, addItemCart, removeItemCart, removeProduct, compraTotal, carritoSize, emptyBag}}>
                {children}
            </CartContext.Provider>
        </>
    )

}

export default CartContextProvider;