import React from "react";
import { Form, Col } from "react-bootstrap";

function FormInput(props){

    return(
        <>
            <Form.Group controlId="formGridName" as={Col}>
                <Form.Label>{props.item.title}</Form.Label>
                <Form.Control 
                    type={props.item.type}
                    placeholder={props.item.details}
                    value={`${props.item.name}`}
                    onChange={props.operation}
                />
            </Form.Group>
        </>
    )
}

export default FormInput; 