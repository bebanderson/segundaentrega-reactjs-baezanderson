import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Button } from "react-bootstrap";

function AddToCartButton(props){

    const { addItemCart } = useContext(CartContext);

    function buyItem(product, count) {
        addItemCart(product, props.quantity);
    }

    return(
        <>
            <Button 
                variant="primary" 
                onClick={() => buyItem(props.product, props.quantity)} 
                disabled={(props.product.stock === 0)?true:false}>
                    Agregar al Carrito
            </Button>
        </>
    )
}

export default AddToCartButton; 