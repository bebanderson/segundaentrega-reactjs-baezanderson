import React from "react";
import "./ItemList/ItemList.css"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon/FavoriteIcon";
import AddToCartButton from "./AddToCartButton";

function Item(props){

    return(
        <>            
            <Card style={{ width: '18rem'}} key={props.item.id}>
                <FavoriteIcon producto={props.item}/>
                <Link to={`/producto/${props.item.id}`} >
                    <Card.Img variant="top" src={props.item.img} />
                    <Card.Body>
                        <Card.Title>{props.item.name}</Card.Title>
                        <Card.Text>
                        Precio: $ {props.item.price}
                        </Card.Text>
                    </Card.Body>
                </Link>
                <AddToCartButton quantity={1} product={props.item} />
            </Card>   
        </>
    )
} 

export default Item;