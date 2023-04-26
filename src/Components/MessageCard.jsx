import React from "react";
import { Card } from "react-bootstrap";

function MessageCard(props){

    function onEmailClick() {
        window.open(`mailto:${props.item.email}?subject=Respuesta de Dulces delicias&body=${props.item.name}! Gracias por dejarnos tu consulta en nuestra web!`);
    }

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.item.name} {props.item.lastname}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.item.email}</Card.Subtitle>
                    <Card.Text>
                        {props.item.text}
                    </Card.Text>
                    <Card.Link onClick={onEmailClick}>Responder Mensaje</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default MessageCard; 