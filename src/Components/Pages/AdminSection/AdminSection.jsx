import React from "react";
import { Tabs, Tab, ListGroup, Accordion } from "react-bootstrap";

function AdminSection(props){

    return(
        <>
            <h2>Mi panel</h2>
            <Tabs defaultActiveKey="sales" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="sales" title="Mis ventas">
                    <h3>Ventas realizadas</h3>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        {props.orderItem}
                    </Accordion>
                </Tab>
                <Tab eventKey="messages" title="Mensajes recibidos">
                    <h3>Mensajes Recibidos</h3>
                    <ListGroup variant="flush">
                        {props.messageItem}
                    </ListGroup>
                </Tab>
            </Tabs>
        </>
    )
}

export default AdminSection; 