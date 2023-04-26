import React from "react";
import { Accordion, ListGroup, Row, Col } from "react-bootstrap";

function SaleCard(props){

    let ordenItem = props.item.Orden;
   
    let productsList = ordenItem.map((item) =>  <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>)

    return(
        <>
            <Accordion.Item eventKey={props.item.id}>
                <Accordion.Header>Orden ID {props.item.id} de {props.item.Usuario.name} {props.item.Usuario.lastname}</Accordion.Header>
                <Accordion.Body>
                    <Row className="mb-3">
                        <ListGroup variant="flush" as={Col} >
                            Documento: {props.item.Usuario.document} <br></br>
                            Email: {props.item.Usuario.email}<br></br>
                            Dirección: {props.item.Usuario.adress}<br></br>
                            Codigo Postal: {props.item.Usuario.zip}<br></br>
                            País: {props.item.Usuario.country}<br></br>
                        </ListGroup>
                        <ListGroup variant="flush" as={Col} >
                                {productsList}
                        </ListGroup>
                        <ListGroup variant="flush" as={Col} >
                            Medio de Pago: {props.item.payment}<br></br>
                            Estado de pago: {props.item.PaymentState}<br></br>
                            Medio de Envio: {props.item.shipping}<br></br>
                            Estado de Envío: {props.item.ShippingState}<br></br>
                        </ListGroup>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default SaleCard; 