import React, { useContext, useEffect, useState} from "react";
import "./FavoriteItem.css";
import { FavoriteContext } from "../../Contexts/FavoriteContext";
import { ProductsContext } from "../../Contexts/ProductsContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FavoriteItem(props){

    const [ availability , setAvailability ] = useState(true);

    const { itemToCart } = useContext(FavoriteContext);
    const { removeProduct } = useContext(FavoriteContext); 
    const { product } = useContext(ProductsContext);

    const index = product.findIndex(producto => producto.id === props.item.id); 
    const searchAvailability = product.find(producto => producto.id === props.item.id); 

    useEffect(() => {
        if (searchAvailability.stock>0){
            setAvailability(true);
        } else {
            setAvailability(false);
        }
    }, [product[index].stock])

    return(
        <>
          <Card className="favorite-card" border="primary" style={{ width: '100%' }}>
            <Card.Img className="cartItemImg" variant="top" src={props.item.img} alt={props.item.name} />
            <Card.Body className="favorite-body">
                <Link to={`/producto/${props.item.id}`} >
                    <Card.Title>{props.item.name}</Card.Title>
                </Link>
                { availability ? (
                        <>
                            <Button onClick={() => itemToCart(props.item.id)}>Agregar al Carrito</Button>
                        </>
                    ) : (
                        <>
                            <p>Este producto no está disponible.</p>
                        </>
                    )
                }  
                <Button onClick={() => removeProduct(props.item.id)}>Eliminar de mis favoritos</Button>
            </Card.Body>    
        </Card>
        </>
    )
}

export default FavoriteItem;

