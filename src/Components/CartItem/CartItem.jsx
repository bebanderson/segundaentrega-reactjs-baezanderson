import React, { useContext } from "react";
import "./CartItem.css";
import { Card } from "react-bootstrap";
import { CartContext } from "../../Contexts/CartContext";
import { ProductsContext } from "../../Contexts/ProductsContext";
import AdditionButton from "../AdditionButton";
import SubtractionButton from "../SubtractionButton";
import TrashIcon from "../TrashIcon/TrashIcon";

function CartItem(props){

    const subTotal = props.item.cantidad * props.item.price;

    const { addItemCart } = useContext(CartContext); 
    const { removeItemCart } = useContext(CartContext); 

    const { product } = useContext(ProductsContext);
    const item = product.find( item => item.id === props.item.id);

    return(
        <>
          <Card className="cartItem" border="primary" style={{ width: '100%' }}>
            <Card.Img className="cartItemImg" variant="top" src={props.item.img} />
            <Card.Body className="cartItemBody">
            <Card.Title>{props.item.name}</Card.Title>
            <TrashIcon idProd={props.item.id} />
            <Card.Text>
                <SubtractionButton count={props.item.cantidad} operation={() => {removeItemCart(props.item.id)}} stock={item.stock}/>
                <span style={{marginLeft:"20px", marginRight:"20px"}}>{props.item.cantidad}</span>
                <AdditionButton count={props.item.cantidad} operation={() => {addItemCart(props.item, 1)}} stock={item.stock}/> 
                <br></br>
                <span>$ {subTotal}</span>
            </Card.Text>
            </Card.Body>    
        </Card>
        </>
    )
}

export default CartItem;

